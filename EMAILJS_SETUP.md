# EmailJS Setup Guide for PixelHub

This guide will help you set up EmailJS to send contact form emails to pixelhub714@gmail.com

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail
4. Follow the setup instructions to connect pixelhub714@gmail.com
5. Note down your Service ID

## Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the PixelHub contact form.
```

4. Note down your Template ID

## Step 4: Get Your Public Key
1. Go to Account > API Keys
2. Copy your Public Key

## Step 5: Update the Code
In src/pages/Contact.tsx, uncomment and update these lines:

```typescript
import emailjs from '@emailjs/browser';

// Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY with actual values
emailjs.init('YOUR_PUBLIC_KEY');

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  templateParams,
  'YOUR_PUBLIC_KEY'
);
```

## Step 6: Test
1. Save the file
2. Test the contact form
3. Check pixelhub714@gmail.com for incoming emails

## Template Variables
The following variables are already set up in the code:
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{subject}} - Email subject
- {{message}} - Email message
- {{to_email}} - Recipient email (pixelhub714@gmail.com)
- {{to_name}} - Recipient name (PixelHub Team)

## Security Note
Make sure to keep your EmailJS credentials secure and never commit them to public repositories.
