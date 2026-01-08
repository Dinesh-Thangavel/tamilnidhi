'use client'

import { useEffect, useState } from 'react'

interface VisitorStats {
  today: number
  thisMonth: number
  overall: number
}

export default function VisitorCounter() {
  const [stats, setStats] = useState<VisitorStats>({
    today: 0,
    thisMonth: 0,
    overall: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Track visitor and get stats
    const trackVisitor = async () => {
      try {
        // First, track the visitor
        await fetch('/api/visitors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        // Then get updated stats
        const response = await fetch('/api/visitors')
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error('Error tracking visitor:', error)
        // Try to get stats anyway
        try {
          const response = await fetch('/api/visitors')
          const data = await response.json()
          setStats(data)
        } catch (e) {
          console.error('Error fetching visitor stats:', e)
        }
      } finally {
        setLoading(false)
      }
    }

    trackVisitor()
  }, [])

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 md:p-6 shadow-sm">
        <div className="flex items-center justify-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span className="text-sm text-gray-600 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            பார்வையாளர்களை எண்ணுகிறது...
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-lg p-4 md:p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-4 text-center tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
        பார்வையாளர் எண்ணிக்கை
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Today */}
        <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
          <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
            {formatNumber(stats.today)}
          </div>
          <div className="text-sm text-gray-600 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            இன்று
          </div>
        </div>
        
        {/* This Month */}
        <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
          <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">
            {formatNumber(stats.thisMonth)}
          </div>
          <div className="text-sm text-gray-600 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            இந்த மாதம்
          </div>
        </div>
        
        {/* Overall */}
        <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
          <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
            {formatNumber(stats.overall)}
          </div>
          <div className="text-sm text-gray-600 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            மொத்தம்
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 text-center mt-4 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
        * தனித்துவமான பார்வையாளர்கள் மட்டும் கணக்கிடப்படுகிறது
      </p>
    </div>
  )
}

