# Email.js Setup Guide

I've integrated Email.js into your portfolio contact form. Follow these steps to complete the setup:

## Step 1: Create an Email.js Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Get Your Public Key
1. Go to your Email.js dashboard
2. Click on "Account" in the left sidebar
3. Copy your **Public Key** (usually looks like: `XXXXXXXXXXXXXXXX`)

## Step 3: Create an Email Service
1. In the dashboard, go to "Email Services" (or "Services")
2. Click "Add Service"
3. Select "Gmail" or another email provider you want to use
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (e.g., `service_xxxxxxxxxx`)

## Step 4: Create an Email Template
1. Go to "Email Templates" in your Email.js dashboard
2. Click "Create New Template"
3. Use the following template variables in your template:
   - `{{to_email}}` - recipient email (halimon.dev@gmail.com)
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{message}}` - message content

Example template content:
```
Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Copy the **Template ID** (e.g., `template_xxxxxxxxxx`)

## Step 5: Update Contact.tsx
Open `src/components/Contact/Contact.tsx` and replace the placeholders:

```javascript
// Line 8
emailjs.init('YOUR_PUBLIC_KEY');

// Line 39 (in handleSubmit)
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace this
  'YOUR_TEMPLATE_ID',     // Replace this
  { ... }
);
```

## Example:
```javascript
emailjs.init('3_a1b2c3d4e5f6g7h8i9j');

await emailjs.send(
  'service_abc123def456',
  'template_xyz789uvw012',
  { ... }
);
```

## Testing
1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check that you receive the email

## Notes
- The free plan of Email.js includes up to 200 emails per month
- Keep your Public Key safe (it's meant to be public, but don't share your Service ID or Template ID if you're concerned about overuse)
- The email will be sent to `halimon.dev@gmail.com` as configured in the Contact component

For more help, visit the [Email.js documentation](https://www.emailjs.com/docs/)
