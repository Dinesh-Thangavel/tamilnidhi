# Email Troubleshooting Guide

## Current Error: "Invalid login: 535-5.7.8 Username and Password not accepted"

This error means Gmail is rejecting the authentication. Here's how to fix it:

## Step 1: Verify App Password

The app password should be **16 characters without spaces**. 

Your current app password: `rbvh uckt llpt` (with spaces removed = `rbvhucktllpt`)

### How to Generate a New Gmail App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** (left sidebar)
3. Under "How you sign in to Google", click **2-Step Verification**
   - If not enabled, enable it first
4. Scroll down and click **App passwords**
5. Select app: **Mail**
6. Select device: **Other (Custom name)** → Enter "Tamil Blog"
7. Click **Generate**
8. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
9. Update `.env.local` with the new password

## Step 2: Update .env.local

Replace the app password in `.env.local`:

```env
GMAIL_APP_PASSWORD=your-new-16-char-password-here
```

**Important**: You can include spaces or not - the code automatically removes them.

## Step 3: Restart Server

After updating `.env.local`:

1. Stop server (Ctrl+C)
2. Start again: `npm run dev`

## Step 4: Test Again

Submit the contact form and check:
- Terminal console for any errors
- Your email inbox

## Common Issues:

### Issue: "App passwords" option not showing
**Solution**: You must have 2-Step Verification enabled first.

### Issue: Still getting authentication error
**Solutions**:
1. Double-check the app password (copy-paste to avoid typos)
2. Make sure you're using an App Password, not your regular Gmail password
3. Try generating a new app password
4. Check if "Less secure app access" is needed (usually not required with App Passwords)

### Issue: Email sent but not received
**Solutions**:
1. Check spam/junk folder
2. Check "All Mail" folder in Gmail
3. Wait a few minutes (sometimes there's a delay)

## Current Configuration:

- **Method**: Gmail Service (prioritized over SMTP)
- **User**: dineshemur@gmail.com
- **App Password**: rbvh uckt llpt (spaces will be removed automatically)

## Need Help?

If still not working after following these steps:
1. Check the terminal console for detailed error messages
2. Verify the app password is correct
3. Try generating a fresh app password

