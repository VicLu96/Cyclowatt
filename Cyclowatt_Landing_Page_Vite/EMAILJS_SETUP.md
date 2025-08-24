# EmailJS Setup Guide

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Connect Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service" and choose your email provider (Gmail, Outlook, etc.)
3. Follow the setup instructions for your chosen service
4. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

\`\`\`
Subject: New CycloWatt Signup - {{user_email}}

Hello,

A new user has signed up for CycloWatt:

Email: {{user_email}}
Time spent on page: {{time_spent}} seconds
Timestamp: {{timestamp}}
Page URL: {{page_url}}
User Agent: {{user_agent}}

Best regards,
CycloWatt System
\`\`\`

4. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

## 5. Update Configuration
1. Replace the placeholder values in `components/hero-section.tsx`:
   - `YOUR_PUBLIC_KEY` with your actual public key
   - `YOUR_SERVICE_ID` with your service ID
   - `YOUR_TEMPLATE_ID` with your template ID

## 6. Environment Variables (Optional)
For better security, you can use environment variables:
1. Create a `.env.local` file in your project root
2. Add your EmailJS credentials (see `.env.example`)
3. Update the component to use `import.meta.env.VITE_EMAILJS_PUBLIC_KEY` etc.

## 7. Test
1. Run your application
2. Fill out the email form
3. Check your email (victor.luder@cyclowatt.org) for the logging data
