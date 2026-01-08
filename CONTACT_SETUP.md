# Contact Form Setup Guide

## Overview
The contact form sends emails to `dineshemur@gmail.com` without displaying the email address anywhere on the website.

## Email Configuration

To enable email sending, you need to configure one of the following options:

### Option 1: Gmail (Recommended)

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable 2-Step Verification
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate an App Password for "Mail"
5. Add to your `.env.local` file:

```env
CONTACT_EMAIL=dineshemur@gmail.com
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

### Option 2: SMTP (For other email providers)

Add to your `.env.local` file:

```env
CONTACT_EMAIL=dineshemur@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
SMTP_FROM=noreply@tamilnidhi.com
```

## Installation

After configuring environment variables, install dependencies:

```bash
npm install
```

## Testing

1. Start the development server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the form
4. Check your email inbox (dineshemur@gmail.com)

## Fallback Behavior

If email service is not configured, form submissions will:
- Still show success message to users
- Log submission details to server console
- Allow you to see submissions in development

## Security Notes

- Never commit `.env.local` to git
- Use App Passwords, not regular passwords
- The email address is not displayed anywhere on the website
- All form submissions are validated server-side

