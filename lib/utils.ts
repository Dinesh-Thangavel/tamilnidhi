/**
 * Format date string to a readable format
 */
export function formatDate(dateString: string): string {
  if (!dateString) return ''
  
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return dateString // Return original if invalid
    }
    
    // Format as YYYY-MM-DD or return formatted Tamil date
    return date.toLocaleDateString('ta-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return dateString
  }
}

/**
 * Format date for OpenGraph (ISO 8601 format)
 */
export function formatDateForOG(dateString: string): string {
  if (!dateString) return ''
  
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return dateString
    }
    return date.toISOString()
  } catch {
    return dateString
  }
}

