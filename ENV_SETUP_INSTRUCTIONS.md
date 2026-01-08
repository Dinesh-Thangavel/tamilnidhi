# Email Configuration Setup

## Important: File Name

Next.js loads `.env.local` for local development, NOT `.env`

## Step 1: Create `.env.local` file

Create a file named `.env.local` (not `.env`) in your project root with this content:

```env
# Contact Form Email Configuration
CONTACT_EMAIL=dineshemur@gmail.com

# Gmail Configuration (Option 1 - Recommended)
GMAIL_USER=dineshemur@gmail.com
GMAIL_APP_PASSWORD=rbvh uckt llpt
```

**OR** use SMTP configuration:

```env
# Contact Form Email Configuration
CONTACT_EMAIL=dineshemur@gmail.com

# SMTP Configuration (Option 2)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=dineshemur@gmail.com
SMTP_PASS=rbvh uckt llpt
```

## Step 2: Restart Server

**IMPORTANT**: After creating/updating `.env.local`, you MUST restart your development server:

1. Stop the server (Ctrl+C)
2. Start it again: `npm run dev`

## Step 3: Test

1. Go to `/contact` page
2. Fill out the form
3. Submit it
4. Check your email (dineshemur@gmail.com)

## Notes:

- The app password can have spaces - the code automatically removes them
- Use only ONE method (either GMAIL_USER/GMAIL_APP_PASSWORD OR SMTP_* variables)
- `.env.local` is already in `.gitignore` so it won't be committed

