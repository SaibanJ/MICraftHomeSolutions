# MICraftHomeSolutions

Website for MICraftHomeSolutions, a home repair and improvement service in Michigan.

## Contact Form Setup

The website includes a contact form that sends submissions to the business email address. Here's how to set it up:

### Email Configuration

1. The contact form is configured to send emails to the business email address: `Alex@micrafthomesolutions.com`
2. Email credentials are stored in the `.env.local` file, which is not committed to the repository for security reasons.
3. You need to set up your email password in the `.env.local` file:

```
EMAIL_USER=Alex@micrafthomesolutions.com
EMAIL_PASSWORD=your-actual-email-password
```

4. If you're using Gmail, you might need to:
   - Enable "Less secure app access" in your Google account settings, or
   - Use an "App Password" instead of your regular password (recommended)

### How to Generate an App Password for Gmail

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security"
3. Under "Signing in to Google," select "App passwords" (you may need to enable 2-Step Verification first)
4. Select "Mail" as the app and "Other" as the device
5. Enter "MICraftHomeSolutions Website" as the name
6. Click "Generate"
7. Copy the generated password and paste it in your `.env.local` file

### Testing the Contact Form

After setting up the email credentials, you should test the contact form to ensure it's working correctly:

1. Fill out the contact form on the website
2. Submit the form
3. Check your email to confirm that you received the submission

If you encounter any issues, check the server logs for error messages.