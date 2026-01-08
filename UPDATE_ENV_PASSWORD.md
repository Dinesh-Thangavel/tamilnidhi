# Update Gmail App Password in .env.local

## Current Issue
The `.env.local` file still shows the old password. You need to update it with your new app password.

## Steps to Update

### 1. Open `.env.local` file
Located in your project root: `D:\Tamil Blog\.env.local`

### 2. Update the password line
Find this line:
```env
GMAIL_APP_PASSWORD=rbvh uckt llpt
```

Replace `rbvh uckt llpt` with your NEW 16-character app password.

### 3. Correct Format
Your `.env.local` should look like this:

```env
# Contact Form Email Configuration
CONTACT_EMAIL=dineshemur@gmail.com

# Gmail Configuration (Recommended - Use App Password)
GMAIL_USER=dineshemur@gmail.com
GMAIL_APP_PASSWORD=your-new-16-char-password-here
```

**Important Notes:**
- You can include spaces or not - both work
- Make sure there are NO quotes around the password
- Make sure there are NO extra spaces before or after the `=` sign
- The password should be exactly 16 characters (spaces removed)

### 4. Save the file

### 5. Restart the server
**CRITICAL**: You MUST restart the server for changes to take effect!

1. Stop the server (Ctrl+C in the terminal)
2. Start it again: `npm run dev`

### 6. Test again
Submit the contact form and check:
- Console logs (should show password length and format)
- Email inbox

## Verify Password Format

After restarting, check the console logs. You should see:
- App Password length: 16 characters
- App Password format check: Valid format (16 alphanumeric)

If you see a different length, the password wasn't updated correctly.

## Common Mistakes

❌ **Wrong**: `GMAIL_APP_PASSWORD="abcd efgh ijkl mnop"` (quotes)
❌ **Wrong**: `GMAIL_APP_PASSWORD = abcd efgh ijkl mnop` (spaces around =)
✅ **Correct**: `GMAIL_APP_PASSWORD=abcd efgh ijkl mnop`
✅ **Correct**: `GMAIL_APP_PASSWORD=abcdefghijklmnop`

## Still Not Working?

1. Double-check the password in `.env.local` matches your new app password
2. Make sure you restarted the server after updating
3. Check console logs for password length (should be 16)
4. Try generating a fresh app password from Google
5. Make sure 2-Step Verification is enabled

