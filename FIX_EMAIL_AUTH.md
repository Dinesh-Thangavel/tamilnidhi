# Fix Gmail Email Authentication

## Current Status
✅ Form is working - submissions are logged
❌ Email authentication failing - need to fix app password

## Error Message
```
535-5.7.8 Username and Password not accepted
```

This means Gmail is rejecting the login credentials.

## Solution: Generate a New Gmail App Password

### Step 1: Enable 2-Step Verification (if not already enabled)

1. Go to: https://myaccount.google.com/security
2. Under "How you sign in to Google", click **2-Step Verification**
3. If not enabled, follow the steps to enable it
4. You'll need your phone number

### Step 2: Generate App Password

1. Still on the Security page, scroll down
2. Find **App passwords** (under "2-Step Verification")
3. Click **App passwords**
4. You may need to sign in again
5. Select app: **Mail**
6. Select device: **Other (Custom name)**
7. Type: **Tamil Blog**
8. Click **Generate**
9. You'll see a 16-character password like: `abcd efgh ijkl mnop`
10. **Copy this password immediately** (you can't see it again!)

### Step 3: Update .env.local

1. Open `.env.local` file in your project
2. Replace the `GMAIL_APP_PASSWORD` line with your new password:

```env
# Contact Form Email Configuration
CONTACT_EMAIL=dineshemur@gmail.com

# Gmail Configuration
GMAIL_USER=dineshemur@gmail.com
GMAIL_APP_PASSWORD=your-new-16-char-password-here
```

**Important**: 
- You can include spaces or not - the code removes them automatically
- Make sure there are no extra spaces or quotes around the password

### Step 4: Restart Server

1. Stop the server (Ctrl+C)
2. Start again: `npm run dev`

### Step 5: Test

1. Submit the contact form again
2. Check console - should see "✓ Email sent successfully"
3. Check your email inbox (dineshemur@gmail.com)

## Common Issues

### "App passwords" option not showing
**Solution**: You must enable 2-Step Verification first (Step 1)

### Still getting authentication error
**Solutions**:
1. Double-check you copied the entire 16-character password
2. Make sure there are no extra spaces in `.env.local`
3. Try generating a new app password
4. Make sure you're using an App Password, not your regular Gmail password

### Password format
- App passwords are always 16 characters
- Usually shown as: `xxxx xxxx xxxx xxxx` (4 groups of 4)
- You can use with or without spaces in `.env.local`

## Current Configuration

- **Email**: dineshemur@gmail.com
- **App Password**: Needs to be updated (current one is not working)
- **Status**: Form works, email needs new password

## After Fixing

Once you update the app password and restart:
- Form submissions will be sent via email
- You'll receive emails at dineshemur@gmail.com
- Console will show "✓ Email sent successfully"

