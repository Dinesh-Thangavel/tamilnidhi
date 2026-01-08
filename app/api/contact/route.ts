import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration - using environment variables
const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || 'dineshemur@gmail.com'

// Create transporter
const createTransporter = () => {
  // Priority 1: Use Gmail service (more reliable for Gmail accounts)
  // For Gmail, you need to use an App Password (not regular password)
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    const appPassword = process.env.GMAIL_APP_PASSWORD.replace(/\s+/g, '') // Remove all spaces
    console.log('Using Gmail service with user:', process.env.GMAIL_USER)
    console.log('App Password length:', appPassword.length, 'characters')
    console.log('App Password format check:', /^[a-z0-9]{16}$/i.test(appPassword) ? 'Valid format (16 alphanumeric)' : 'Invalid format')
    // Show first 2 and last 2 chars for debugging (masked)
    if (appPassword.length >= 4) {
      console.log('App Password preview:', appPassword.substring(0, 2) + '***' + appPassword.substring(appPassword.length - 2))
    }
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: appPassword,
      },
    })
  }

  // Priority 2: Use SMTP configuration (fallback)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const smtpPass = process.env.SMTP_PASS.replace(/\s+/g, '') // Remove all spaces
    console.log('Using SMTP with host:', process.env.SMTP_HOST)
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: smtpPass,
      },
    })
  }

  // If no email config, return null (will use console log as fallback)
  return null
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'பெயர், மின்னஞ்சல் மற்றும் செய்தி தேவையானவை.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'செல்லுபடியாகும் மின்னஞ்சல் முகவரியை உள்ளிடவும்.' },
        { status: 400 }
      )
    }

    // Create email content
    const emailSubject = subject 
      ? `[தமிழ் நிதி] ${subject} - ${name}`
      : `[தமிழ் நிதி] தொடர்பு படிவம் - ${name}`

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          புதிய தொடர்பு படிவம்
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>பெயர்:</strong> ${name}</p>
          <p><strong>மின்னஞ்சல்:</strong> <a href="mailto:${email}">${email}</a></p>
          ${subject ? `<p><strong>தலைப்பு:</strong> ${subject}</p>` : ''}
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">செய்தி:</h3>
          <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>இந்த மின்னஞ்சல் தமிழ் நிதி கல்வி வலைத்தளத்தின் தொடர்பு படிவத்திலிருந்து அனுப்பப்பட்டது.</p>
          <p>பதிலளிக்க: <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
        </div>
      </div>
    `

    const emailText = `
புதிய தொடர்பு படிவம்

பெயர்: ${name}
மின்னஞ்சல்: ${email}
${subject ? `தலைப்பு: ${subject}` : ''}

செய்தி:
${message}

---
இந்த மின்னஞ்சல் தமிழ் நிதி கல்வி வலைத்தளத்திலிருந்து அனுப்பப்பட்டது.
பதிலளிக்க: ${email}
    `

    // Always log the submission first
    console.log('='.repeat(60))
    console.log('CONTACT FORM SUBMISSION')
    console.log('='.repeat(60))
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Subject:', subject || '(No subject)')
    console.log('Message:', message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('='.repeat(60))

    // Try to send email
    const transporter = createTransporter()
    let emailSent = false
    
    if (transporter) {
      // Debug: Log configuration status
      console.log('Email Configuration:')
      console.log('- GMAIL_USER:', process.env.GMAIL_USER ? 'Set' : 'Not set')
      console.log('- GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set')
      console.log('- SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'Not set')
      console.log('- Transporter created: Yes')
      
      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.GMAIL_USER || 'noreply@tamilfinanceblog.com',
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject: emailSubject,
          text: emailText,
          html: emailHtml,
        })

        emailSent = true
        console.log('✓ Email sent successfully to:', RECIPIENT_EMAIL)
      } catch (emailError: any) {
        // Log error but don't fail the request
        console.error('✗ Email sending failed:')
        console.error('Error code:', emailError?.code)
        console.error('Error message:', emailError?.message)
        console.error('Full error:', emailError)
        
        if (emailError?.response) {
          console.error('SMTP Response:', emailError.response)
        }
        
        console.log('\n⚠️  Form submission was logged above, but email could not be sent.')
        console.log('Please check your email configuration in .env.local')
        console.log('='.repeat(60))
      }
    } else {
      console.log('⚠️  Email service not configured')
      console.log('To enable email sending, configure in .env.local:')
      console.log('- GMAIL_USER and GMAIL_APP_PASSWORD')
      console.log('- OR SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT')
      console.log('='.repeat(60))
    }

    // Always return success to user (form submission is logged)
    // Email errors are logged to console for debugging
    return NextResponse.json({
      success: true,
      message: emailSent 
        ? 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!'
        : 'செய்தி பெறப்பட்டது! நாங்கள் விரைவில் உங்களுக்கு பதிலளிப்போம்.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'ஏதோ பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.' },
      { status: 500 }
    )
  }
}

