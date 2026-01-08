'use client'

import { useEffect, useState } from 'react'

interface AdSenseProps {
  slot?: string
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  style?: React.CSSProperties
  className?: string
  position?: 'header' | 'content' | 'footer'
}

/**
 * AdSense Placeholder Component
 * 
 * Lazy-loaded placeholder for AdSense ads.
 * Content loads first, then ads are displayed.
 * 
 * Replace this with actual AdSense code when you get your publisher ID.
 * 
 * Usage:
 * <AdSense slot="1234567890" format="auto" position="content" />
 */
export default function AdSense({ 
  slot, 
  format = 'auto',
  style,
  className = '',
  position = 'content'
}: AdSenseProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  // Lazy load ads after content is loaded
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    // Delay ad loading to ensure content loads first
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  if (!slot) {
    return null
  }

  // Determine ad dimensions based on format and position
  const getAdDimensions = () => {
    if (position === 'header') {
      return { minHeight: '90px', width: '100%' } // Leaderboard
    }
    if (position === 'footer') {
      return { minHeight: '90px', width: '100%' } // Leaderboard
    }
    if (format === 'rectangle') {
      return { minHeight: '250px', width: '100%' } // Medium Rectangle
    }
    if (format === 'horizontal') {
      return { minHeight: '90px', width: '100%' } // Leaderboard
    }
    return { minHeight: '250px', width: '100%' } // Default
  }

  const dimensions = getAdDimensions()

  if (!isVisible) {
    return (
      <div 
        className={`adsense-loading bg-gray-50 rounded-lg ${className}`}
        style={{ minHeight: dimensions.minHeight, ...style }}
        aria-label="Advertisement"
      />
    )
  }

  return (
    <div 
      className={`adsense-placeholder bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-sm ${className}`}
      style={{ ...dimensions, ...style }}
      aria-label="Advertisement"
    >
      <div className="text-center p-4">
        <p className="font-semibold mb-2 text-xs">AdSense Placeholder</p>
        <p className="text-xs">Position: {position}</p>
        <p className="text-xs">Format: {format}</p>
        <p className="text-xs mt-2 text-gray-400">
          Replace with actual AdSense code
        </p>
      </div>
    </div>
  )
}

