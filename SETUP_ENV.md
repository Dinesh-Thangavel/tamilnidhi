# Environment Variables Setup

## Create .env.local file

Create a file named `.env.local` in the root directory of your project with the following content:

```env
# Contact Form Email Configuration
CONTACT_EMAIL=dineshemur@gmail.com

# Gmail Configuration
GMAIL_USER=dineshemur@gmail.com
GMAIL_APP_PASSWORD=rbvh uckt llpt
```

## Important Notes:

1. **App Password Format**: The app password can have spaces or no spaces - both will work. The API automatically removes spaces.

2. **File Location**: The `.env.local` file should be in the same directory as `package.json`

3. **Security**: The `.env.local` file is already in `.gitignore`, so it won't be committed to git.

4. **Restart Server**: After creating the file, restart your development server:
   ```bash
   npm run dev
   ```

## Testing:

1. Go to `/contact` page
2. Fill out the form
3. Submit it
4. Check your email inbox (dineshemur@gmail.com)

The email will be sent from `dineshemur@gmail.com` to `dineshemur@gmail.com` with the form submission details.

