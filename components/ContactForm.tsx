'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'ஏதோ பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('ஏதோ பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
          பெயர் <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors tamil-text"
          style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}
          placeholder="உங்கள் பெயரை உள்ளிடவும்"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
          மின்னஞ்சல் <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="உங்கள் மின்னஞ்சலை உள்ளிடவும்"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
          தலைப்பு
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors tamil-text"
          style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}
          placeholder="தலைப்பு (விரும்பினால்)"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
          செய்தி <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none tamil-text"
          style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}
          placeholder="உங்கள் செய்தியை உள்ளிடவும்"
          disabled={status === 'loading'}
        ></textarea>
      </div>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
          <p className="font-medium">✓ உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!</p>
          <p className="text-sm mt-1">நாங்கள் விரைவில் உங்களுக்கு பதிலளிப்போம்.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
          <p className="font-medium">✗ {errorMessage}</p>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400 disabled:cursor-not-allowed tamil-text"
          style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}
        >
          {status === 'loading' ? 'அனுப்புகிறது...' : 'அனுப்பு'}
        </button>
      </div>
    </form>
  )
}

