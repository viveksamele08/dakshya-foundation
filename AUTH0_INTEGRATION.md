# Auth0 OAuth Integration Guide

## Overview
This application has been integrated with **Auth0** for secure OAuth authentication. Users can now login/logout and their information is automatically captured in form submissions.

## Setup Instructions

### 1. Auth0 Dashboard Configuration

1. Go to [Auth0 Dashboard](https://manage.auth0.com)
2. Select your application
3. Go to **Settings** tab
4. Record your:
   - **Domain** (e.g., `dakshya-foundation.auth0.com`)
   - **Client ID** (e.g., `YOUR_CLIENT_ID_HERE`)

5. Configure **Allowed Callback URLs**:
   - Development: `http://localhost:5173`
   - Production: `https://your-vercel-domain.vercel.app`

6. Configure **Allowed Logout URLs**:
   - Development: `http://localhost:5173`
   - Production: `https://your-vercel-domain.vercel.app`

### 2. Vercel Environment Variables

Set these in your **Vercel project settings** under Environment Variables:

```
VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_CALLBACK_URL=https://your-vercel-domain.vercel.app
```

### 3. Local Development Setup

Create a `.env.local` file in the project root (copy from `.env.example`):

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Auth0 credentials:
```
VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_CALLBACK_URL=http://localhost:5173
```

### 4. Testing the Integration

1. **Local Testing**:
   ```bash
   npm run dev
   ```
   - Navigate to the site
   - Click the **Login** button in the navbar
   - Authenticate via Auth0
   - Verify your profile appears in the navbar
   - Try submitting a form — your Auth0 user ID will be captured

2. **Production Testing**:
   - Deploy to Vercel (auto-deployment on push)
   - Test login/logout flows
   - Test form submissions with authenticated users

## Features

### Login/Logout
- **Login Button**: Located in navbar (desktop and mobile)
- **User Avatar**: Shows authenticated user's profile picture
- **Logout**: Click avatar → select "Logout"

### Form Integration
- **Auto-fill**: Name and email fields auto-populate from Auth0 profile
- **User Tracking**: Authenticated submissions include `auth0_user_id`
- **Persistence**: Form data stored via serverless function with optional GitHub issue creation

## Component Structure

### New Files
- `src/config/auth0.jsx` - Auth0 configuration
- `src/components/LoginButton.jsx` - Login/logout UI component
- `.env.example` - Environment variable template

### Modified Files
- `src/main.jsx` - Wrapped app with `Auth0ProviderWithConfig`
- `src/components/Navbar.jsx` - Added `LoginButton` to navbar
- `src/views/GetInvolved.jsx` - Auto-fill forms, capture user ID on submission

## Troubleshooting

### Login Button Not Working
1. Check `.env.local` has correct `VITE_AUTH0_DOMAIN` and `VITE_AUTH0_CLIENT_ID`
2. Verify these URLs are added in Auth0 Dashboard:
   - Allowed Callback URLs
   - Allowed Logout URLs

### Form Not Capturing User ID
1. Ensure user is logged in before submitting
2. Check browser console for errors
3. Verify serverless function at `/api/submit-form` is receiving `auth0_user_id` parameter

### Environment Variables Not Loading
1. Restart dev server after updating `.env.local`
2. Vercel env vars require redeployment
3. Check Vercel project settings for correct variable names

## Security Notes

⚠️ **Never commit `.env.local`** with actual credentials
- Add `.env.local` to `.gitignore` (already done)
- Use `.env.example` as template for team

## Additional Resources

- [Auth0 React SDK Docs](https://auth0.com/docs/get-started/auth0-overview)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Auth0 Dashboard](https://manage.auth0.com)
