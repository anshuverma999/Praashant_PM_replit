# Deploying Your Portfolio to Netlify

## Quick Deployment Steps

### Option 1: Direct Netlify Deploy (Recommended)
1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account or email

2. **Deploy from GitHub**
   - Push your code to a GitHub repository
   - In Netlify dashboard, click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Use these build settings:
     - Build command: `vite build`
     - Publish directory: `dist`
     - Base directory: `client`

3. **Environment Variables**
   - Since this is a frontend-only deployment, no backend environment variables are needed
   - Your portfolio will work as a static site

### Option 2: Manual Deploy
1. **Build the project locally**
   ```bash
   cd client
   npm run build
   ```

2. **Upload the dist folder**
   - Drag and drop the `dist` folder to Netlify's deploy area
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist`

### Option 3: Use Netlify CLI
1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy your site**
   ```bash
   netlify deploy --prod --dir=dist
   ```

## Important Notes

### Build Configuration
- The `netlify.toml` file is already created in your project root
- It configures Netlify to use `vite build` and publish from `dist` directory
- Includes redirect rules for single-page application routing

### File Structure for Deployment
```
your-portfolio/
├── client/           # Frontend code
│   ├── src/
│   └── dist/        # Generated after build
├── netlify.toml     # Netlify configuration
└── package.json
```

### What Gets Deployed
- Only the frontend React application (static files)
- Your resume PDF file and profile picture
- All animations and interactive features
- No backend server needed for basic portfolio

### Domain Setup
- Netlify provides a free subdomain (e.g., `amazing-portfolio-123.netlify.app`)
- You can add a custom domain in Netlify settings if you have one

## Troubleshooting

### Build Errors
- If build fails, check the build logs in Netlify dashboard
- Common issues:
  - Missing dependencies
  - Build timeout (increase in site settings)
  - Environment variables

### Performance Tips
- Your animations and large icons might affect load time
- Consider optimizing images if deployment is slow
- Netlify automatically handles caching and CDN

## Next Steps After Deployment
1. Test all links and animations
2. Verify resume download works
3. Check mobile responsiveness
4. Set up form handling if you add contact forms later
5. Monitor site performance in Netlify analytics

Your portfolio is ready for deployment! The site will be live within minutes of successful build.