# Sam & Glory Wedding Website 💒

A beautiful, responsive Christian wedding website built with React, TypeScript, and Tailwind CSS. Features a romantic design with smooth animations, a splash screen, and an engagement photo gallery.

## ✨ Features

- **Splash Screen**: Elegant animated introduction with floating hearts
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful transitions using Framer Motion
- **Photo Gallery**: Space for showcasing engagement photos
- **Romantic Typography**: Custom fonts including Dancing Script and Great Vibes
- **Wedding Details**: Complete ceremony and reception information
- **Christian Theme**: Designed specifically for Christian weddings

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for beautiful icons
- **PostCSS** for CSS processing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.16.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository or use this existing project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173` (or the port shown in terminal)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📸 Adding Your Photos

To add your engagement photos:

1. Replace the placeholder images in the `PhotoGallery` component
2. Update the `galleryImages` array in `/src/components/PhotoGallery.tsx`
3. Add your actual image files to the `public/` directory

## 🎨 Customization

### Wedding Details
Update the wedding information in:
- `/src/components/Hero.tsx` - Main hero section
- `/src/components/InvitationSection.tsx` - Detailed invitation
- `/src/components/EventDetails.tsx` - Venue and schedule details

### Styling
- Color scheme can be modified in `tailwind.config.js`
- Fonts are imported from Google Fonts in `src/index.css`
- Custom animations are defined in the Tailwind config

### Content
- Update names, dates, and venue information throughout the components
- Modify the romantic quotes and messages as desired

## 📱 Mobile Responsive

The website is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images and animations for mobile devices
- Responsive typography and spacing

## 🎭 Animations

Beautiful animations include:
- Floating hearts background effect
- Smooth page transitions
- Hover effects on gallery images
- Fade-in animations for content sections

## 🌐 Deployment

This website can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Simply run `npm run build` and deploy the `dist/` folder.

## 📧 Contact Information

Wedding Details:
- **Date**: November 5th, 2025
- **Time**: 6:00 PM
- **Venue**: Shubam Celebrations, Miyapur
- **Couple**: Sam & Glory

---

*Made with ❤️ for Sam & Glory's special day*
