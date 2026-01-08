import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

interface VisitorData {
  overall: number
  monthly: { [key: string]: number } // Format: "YYYY-MM"
  daily: { [key: string]: number }   // Format: "YYYY-MM-DD"
  lastReset: string
}

const DATA_DIR = path.join(process.cwd(), 'data')
const DATA_FILE = path.join(DATA_DIR, 'visitors.json')

// Initialize visitor data
async function getVisitorData(): Promise<VisitorData> {
  try {
    if (existsSync(DATA_FILE)) {
      const fileContent = await readFile(DATA_FILE, 'utf-8')
      return JSON.parse(fileContent)
    }
  } catch (error) {
    console.error('Error reading visitor data:', error)
  }
  
  // Return default structure
  return {
    overall: 0,
    monthly: {},
    daily: {},
    lastReset: new Date().toISOString()
  }
}

// Save visitor data
async function saveVisitorData(data: VisitorData): Promise<void> {
  try {
    // Ensure data directory exists
    if (!existsSync(DATA_DIR)) {
      await mkdir(DATA_DIR, { recursive: true })
    }
    
    await writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
  } catch (error) {
    console.error('Error saving visitor data:', error)
  }
}

// Get visitor identifier (IP + User-Agent hash)
function getVisitorId(request: NextRequest): string {
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown'
  const userAgent = request.headers.get('user-agent') || 'unknown'
  
  // Simple hash function
  const str = `${ip}-${userAgent}`
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash).toString()
}

// Track unique visitors per day
const dailyVisitors = new Map<string, Set<string>>()

export async function GET(request: NextRequest) {
  try {
    const data = await getVisitorData()
    const now = new Date()
    const today = now.toISOString().split('T')[0] // YYYY-MM-DD
    const thisMonth = now.toISOString().substring(0, 7) // YYYY-MM
    
    // Get today's count
    const todayCount = data.daily[today] || 0
    
    // Get this month's count
    const thisMonthCount = data.monthly[thisMonth] || 0
    
    // Get overall count
    const overallCount = data.overall || 0
    
    return NextResponse.json({
      today: todayCount,
      thisMonth: thisMonthCount,
      overall: overallCount
    })
  } catch (error) {
    console.error('Error getting visitor count:', error)
    return NextResponse.json({
      today: 0,
      thisMonth: 0,
      overall: 0
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    const visitorId = getVisitorId(request)
    const now = new Date()
    const today = now.toISOString().split('T')[0] // YYYY-MM-DD
    const thisMonth = now.toISOString().substring(0, 7) // YYYY-MM
    
    // Check if we've already counted this visitor today
    if (!dailyVisitors.has(today)) {
      dailyVisitors.set(today, new Set())
    }
    
    const todayVisitors = dailyVisitors.get(today)!
    
    // If this is a new visitor for today, increment counts
    if (!todayVisitors.has(visitorId)) {
      todayVisitors.add(visitorId)
      
      const data = await getVisitorData()
      
      // Increment today's count
      data.daily[today] = (data.daily[today] || 0) + 1
      
      // Increment this month's count
      data.monthly[thisMonth] = (data.monthly[thisMonth] || 0) + 1
      
      // Increment overall count
      data.overall = (data.overall || 0) + 1
      
      // Clean up old daily data (keep only last 30 days)
      const thirtyDaysAgo = new Date(now)
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      
      Object.keys(data.daily).forEach(date => {
        if (date < thirtyDaysAgo.toISOString().split('T')[0]) {
          delete data.daily[date]
        }
      })
      
      // Clean up old monthly data (keep only last 12 months)
      const twelveMonthsAgo = new Date(now)
      twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12)
      const twelveMonthsAgoStr = twelveMonthsAgo.toISOString().substring(0, 7)
      
      Object.keys(data.monthly).forEach(month => {
        if (month < twelveMonthsAgoStr) {
          delete data.monthly[month]
        }
      })
      
      // Clean up old daily visitor sets
      for (const [date, visitors] of dailyVisitors.entries()) {
        if (date < thirtyDaysAgo.toISOString().split('T')[0]) {
          dailyVisitors.delete(date)
        }
      }
      
      await saveVisitorData(data)
    }
    
    const data = await getVisitorData()
    
    return NextResponse.json({
      success: true,
      today: data.daily[today] || 0,
      thisMonth: data.monthly[thisMonth] || 0,
      overall: data.overall || 0
    })
  } catch (error) {
    console.error('Error tracking visitor:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to track visitor'
    }, { status: 500 })
  }
}

