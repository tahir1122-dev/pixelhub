# PixelHub - Netlify Deployment Guide

## Prerequisites
- A Netlify account (free at https://netlify.com)
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Method 1: Git-based Deployment (Recommended)

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Add remote origin:
     ```bash
     git remote add origin https://github.com/yourusername/pixelhub.git
     git branch -M main
     git push -u origin main
     ```

3. **Deploy on Netlify**:
   - Log in to Netlify
   - Click "New site from Git"
   - Choose your Git provider (GitHub)
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Method 2: Manual Deployment

1. **Upload dist folder**:
   - Go to Netlify dashboard
   - Drag and drop the `dist` folder to deploy

### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### Environment Variables (if needed)
If you plan to use EmailJS or other services, add these in Netlify dashboard:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Add custom domain
3. Configure DNS records

### Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Verify responsive design on mobile
- [ ] Test contact form
- [ ] Check all internal links work
- [ ] Verify social media links
- [ ] Test navigation menu on mobile

## Production URL
Your site will be available at: `https://your-site-name.netlify.app`

## Troubleshooting
- If routing doesn't work, ensure `_redirects` file is in public folder
- If build fails, check Node.js version compatibility
- For 404 errors, verify the `netlify.toml` configuration

## Continuous Deployment
Once connected to Git, Netlify will automatically deploy when you push changes to your main branch.

---

Your PixelHub website is now ready for deployment! 🚀
