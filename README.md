# AI Healthcare Landing Page

A modern, responsive landing page for **SASRec** — a revolutionary healthcare records management platform designed to empower patients in Nigeria with secure, accessible, and verified medical information.

> **Original Design**: [Figma Design File](https://www.figma.com/design/oyIlJBp2HoXYWXILD7VAlo/AI-Healthcare-Landing-Page)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Installation Guide](#installation-guide)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Browser Support](#browser-support)

---

## 🎯 Overview

The **AI Healthcare Landing Page** is a single-page application (SPA) built with React and TypeScript that showcases the SASRec platform. It provides an engaging, informative experience for potential users to learn about the platform's features, benefits, and join the waitlist.

### Key Objectives

- **Patient Empowerment**: Showcase how SASRec puts medical records in patients' hands
- **Trust Building**: Highlight security, verification, and compliance features
- **User Acquisition**: Capture early adopters through an integrated waitlist
- **Brand Awareness**: Establish SASRec as a modern, patient-first healthcare solution

---

## ✨ Features

### Landing Page Sections

1. **Hero Section**
   - Eye-catching headline with brand messaging
   - Email waitlist signup form
   - Smooth scroll navigation
   - Animated background elements

2. **Problem-Solution Section**
   - Highlights current healthcare record challenges
   - Presents SASRec as the solution
   - Visual storytelling with icons and imagery

3. **Features Showcase**
   - 6 core features with animated cards:
     - All-in-One Access
     - Verified Health Updates
     - Smart Reminders
     - Military-Grade Security
     - Cross-System Compatibility
     - Patient-First Experience

4. **How It Works**
   - Step-by-step process visualization
   - User journey explanation
   - Clear call-to-action

5. **About Us**
   - Mission and vision statements
   - Team introduction
   - Company values

6. **FAQ Section**
   - Common questions and answers
   - Accordion-style interface
   - Comprehensive information

7. **Footer**
   - Quick links navigation
   - Social media integration
   - Contact information
   - Legal links

### Technical Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Smooth Animations**: Framer Motion for engaging micro-interactions
- **Form Validation**: Built-in email validation for waitlist
- **Toast Notifications**: User feedback via Sonner
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance Optimized**: Code splitting and lazy loading
- **SEO Ready**: Meta tags and semantic structure

---

## 🏗️ Architecture

### Application Architecture

```
┌─────────────────────────────────────────┐
│           Browser (Client)              │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         Vite Dev Server (Dev)           │
│      Static File Server (Prod)         │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│          React Application              │
│  ┌───────────────────────────────────┐  │
│  │         App Component             │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │  Header (Navigation)        │  │  │
│  │  │  Hero (Waitlist Form)       │  │  │
│  │  │  ProblemSolution            │  │  │
│  │  │  Features (6 Cards)         │  │  │
│  │  │  HowItWorks                 │  │  │
│  │  │  AboutUs                    │  │  │
│  │  │  FAQ (Accordion)            │  │  │
│  │  │  Footer                     │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Component Hierarchy

```
App.tsx (Root)
├── Header.tsx (Navigation)
├── Hero.tsx (Hero + Waitlist)
├── ProblemSolution.tsx
├── Features.tsx
│   └── FeatureCard (x6)
├── HowItWorks.tsx
├── AboutUs.tsx
├── FAQ.tsx
│   └── Accordion (Radix UI)
├── Footer.tsx
└── Toaster (Sonner)
```

### Design System

The application uses a **component-based design system** with:

- **Radix UI Primitives**: Accessible, unstyled components
- **Tailwind CSS**: Utility-first styling
- **Custom CSS Variables**: Consistent theming
- **Motion Components**: Framer Motion animations
- **Lucide Icons**: Consistent iconography

---

## 🛠️ Tech Stack

### Core Technologies

| Technology       | Version       | Purpose                                            |
| ---------------- | ------------- | -------------------------------------------------- |
| **React**        | 18.3.1        | UI library for building component-based interfaces |
| **TypeScript**   | Latest        | Type-safe JavaScript for better DX and fewer bugs  |
| **Vite**         | 6.3.5         | Fast build tool and dev server with HMR            |
| **Tailwind CSS** | Via index.css | Utility-first CSS framework                        |

### UI Libraries

| Library           | Version | Purpose                                   |
| ----------------- | ------- | ----------------------------------------- |
| **Radix UI**      | Various | Accessible, unstyled component primitives |
| **Lucide React**  | 0.487.0 | Beautiful, consistent icon set            |
| **Framer Motion** | Latest  | Animation library for React               |
| **Sonner**        | 2.0.3   | Toast notifications                       |

### Form & Data

| Library              | Version | Purpose                          |
| -------------------- | ------- | -------------------------------- |
| **React Hook Form**  | 7.55.0  | Performant form validation       |
| **React Day Picker** | 8.10.1  | Date picker component            |
| **Recharts**         | 2.15.2  | Chart library (future analytics) |

### Development Tools

| Tool                         | Version | Purpose                     |
| ---------------------------- | ------- | --------------------------- |
| **@vitejs/plugin-react-swc** | 3.10.2  | Fast React refresh with SWC |
| **@types/node**              | 20.10.0 | Node.js type definitions    |

---

## 📁 Project Structure

```
AI Healthcare Landing Page/
├── public/                      # Static assets
│   └── (images, fonts, etc.)
├── src/
│   ├── assets/                  # Image assets
│   ├── components/              # React components
│   │   ├── ui/                  # Radix UI components (48 files)
│   │   ├── figma/               # Figma-specific components
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Hero.tsx             # Hero section with waitlist
│   │   ├── ProblemSolution.tsx  # Problem/solution section
│   │   ├── Features.tsx         # Features showcase
│   │   ├── HowItWorks.tsx       # Process explanation
│   │   ├── AboutUs.tsx          # About section
│   │   ├── FAQ.tsx              # FAQ accordion
│   │   └── Footer.tsx           # Footer with links
│   ├── imports/                 # Import utilities
│   ├── styles/                  # Additional styles
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Application entry point
│   ├── index.css                # Global styles (48KB)
│   └── Attributions.md          # Asset attributions
├── index.html                   # HTML template
├── vite.config.ts               # Vite configuration
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Locked dependencies
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

---

## 📦 Dependencies

### Production Dependencies (26 packages)

#### Radix UI Components (22 packages)

```json
"@radix-ui/react-accordion": "^1.2.3"
"@radix-ui/react-alert-dialog": "^1.1.6"
"@radix-ui/react-aspect-ratio": "^1.1.2"
"@radix-ui/react-avatar": "^1.1.3"
"@radix-ui/react-checkbox": "^1.1.4"
"@radix-ui/react-collapsible": "^1.1.3"
"@radix-ui/react-context-menu": "^2.2.6"
"@radix-ui/react-dialog": "^1.1.6"
"@radix-ui/react-dropdown-menu": "^2.1.6"
"@radix-ui/react-hover-card": "^1.1.6"
"@radix-ui/react-label": "^2.1.2"
"@radix-ui/react-menubar": "^1.1.6"
"@radix-ui/react-navigation-menu": "^1.2.5"
"@radix-ui/react-popover": "^1.1.6"
"@radix-ui/react-progress": "^1.1.2"
"@radix-ui/react-radio-group": "^1.2.3"
"@radix-ui/react-scroll-area": "^1.2.3"
"@radix-ui/react-select": "^2.1.6"
"@radix-ui/react-separator": "^1.1.2"
"@radix-ui/react-slider": "^1.2.3"
"@radix-ui/react-slot": "^1.1.2"
"@radix-ui/react-switch": "^1.1.3"
"@radix-ui/react-tabs": "^1.1.3"
"@radix-ui/react-toggle": "^1.1.2"
"@radix-ui/react-toggle-group": "^1.1.2"
"@radix-ui/react-tooltip": "^1.1.8"
```

#### Utility & UI Libraries

```json
"class-variance-authority": "^0.7.1"  // Component variants
"clsx": "*"                           // Conditional classNames
"cmdk": "^1.1.1"                      // Command menu
"embla-carousel-react": "^8.6.0"      // Carousel component
"input-otp": "^1.4.2"                 // OTP input
"lucide-react": "^0.487.0"            // Icon library
"motion": "*"                         // Framer Motion (animations)
"next-themes": "^0.4.6"               // Theme management
"react": "^18.3.1"                    // React library
"react-day-picker": "^8.10.1"         // Date picker
"react-dom": "^18.3.1"                // React DOM
"react-hook-form": "^7.55.0"          // Form management
"react-resizable-panels": "^2.1.7"    // Resizable panels
"recharts": "^2.15.2"                 // Charts
"sonner": "^2.0.3"                    // Toast notifications
"tailwind-merge": "*"                 // Merge Tailwind classes
"vaul": "^1.1.2"                      // Drawer component
```

### Development Dependencies (3 packages)

```json
"@types/node": "^20.10.0"             // Node.js types
"@vitejs/plugin-react-swc": "^3.10.2" // Vite React plugin with SWC
"vite": "6.3.5"                       // Build tool
```

### Total Package Size

- **Production**: ~26 packages
- **Development**: ~3 packages
- **Total**: ~29 direct dependencies

---

## 🚀 Installation Guide

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For cloning the repository ([Download](https://git-scm.com/))

### Verify Prerequisites

```bash
# Check Node.js version
node --version
# Should output: v18.x.x or higher

# Check npm version
npm --version
# Should output: 9.x.x or higher
```

### Step-by-Step Installation

#### Step 1: Clone the Repository

```bash
# Navigate to your desired directory
cd /path/to/your/projects

# Clone the repository (if using Git)
git clone <repository-url>

# Or if you have the project folder, navigate to it
cd "AI Healthcare Landing Page"
```

#### Step 2: Install Dependencies

```bash
# Install all dependencies from package.json
npm install
```

This will:

- Download all 29 packages listed in `package.json`
- Create a `node_modules` folder (~200MB)
- Generate `package-lock.json` (if not present)
- Take approximately 1-3 minutes depending on your internet speed

#### Step 3: Verify Installation

```bash
# Check if node_modules was created
ls node_modules

# Verify key packages are installed
npm list react vite
```

#### Step 4: Start Development Server

```bash
# Start the Vite dev server
npm run dev
```

Expected output:

```
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

The browser should automatically open to `http://localhost:3000`

### Troubleshooting Installation

#### Issue: `npm install` fails

**Solution 1**: Clear npm cache

```bash
npm cache clean --force
npm install
```

**Solution 2**: Delete `node_modules` and reinstall

```bash
rm -rf node_modules package-lock.json
npm install
```

#### Issue: Port 3000 already in use

**Solution**: Change port in `vite.config.ts`

```typescript
server: {
  port: 3001, // Change to any available port
  open: true,
}
```

#### Issue: Module not found errors

**Solution**: Ensure all dependencies are installed

```bash
npm install
npm run dev
```

---

## 💻 Development

### Available Scripts

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Start development server at `http://localhost:3000` |
| `npm run build` | Build production bundle to `build/` directory       |

### Development Server Features

- **Hot Module Replacement (HMR)**: Instant updates without page refresh
- **Fast Refresh**: Preserves component state during edits
- **TypeScript Support**: Real-time type checking
- **Auto-open Browser**: Automatically opens on server start
- **Port**: Default `3000` (configurable in `vite.config.ts`)

### Development Workflow

1. **Start the dev server**:

   ```bash
   npm run dev
   ```

2. **Make changes** to any file in `src/`

3. **See changes instantly** in the browser (HMR)

4. **Check console** for TypeScript errors or warnings

### Code Style Guidelines

- **TypeScript**: Use strict typing, avoid `any`
- **Components**: Functional components with hooks
- **Styling**: Tailwind utility classes
- **Naming**: PascalCase for components, camelCase for functions
- **File Structure**: One component per file

---

## 🏗️ Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build
```

This will:

- Compile TypeScript to JavaScript
- Bundle all components and dependencies
- Minify code for optimal performance
- Generate static assets in `build/` directory
- Create source maps for debugging

### Build Output

```
build/
├── assets/
│   ├── index-[hash].js      # Main JavaScript bundle
│   ├── index-[hash].css     # Compiled CSS
│   └── [images]             # Optimized images
└── index.html               # Entry HTML file
```

### Deployment Options

#### Option 1: Static Hosting (Recommended)

Deploy the `build/` folder to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `build/` folder
- **GitHub Pages**: Push `build/` to `gh-pages` branch
- **AWS S3**: Upload `build/` to S3 bucket
- **Cloudflare Pages**: Connect repository

#### Option 2: Traditional Web Server

Upload `build/` contents to your web server:

```bash
# Example: Using SCP
scp -r build/* user@server:/var/www/html/
```

### Environment Variables

For production builds with environment-specific configs:

1. Create `.env.production`:

   ```env
   VITE_API_URL=https://api.sasrec.com
   VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
   ```

2. Access in code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

---

## 🌐 Browser Support

### Supported Browsers

| Browser       | Version         |
| ------------- | --------------- |
| Chrome        | Last 2 versions |
| Firefox       | Last 2 versions |
| Safari        | Last 2 versions |
| Edge          | Last 2 versions |
| Mobile Safari | iOS 12+         |
| Chrome Mobile | Android 8+      |

### Features Used

- **ES2020+**: Modern JavaScript features
- **CSS Grid & Flexbox**: Layout
- **CSS Custom Properties**: Theming
- **Intersection Observer**: Scroll animations
- **Fetch API**: Future API integration

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 🤝 Contributing

This is a private project. For internal contributions:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

---

## 📞 Support

For questions or issues:

- **Email**: support@sasrec.com
- **Documentation**: [Internal Wiki](#)
- **Slack**: #sasrec-dev

---

## 🎨 Design Credits

Original design by the SASRec design team.  
Figma file: [AI Healthcare Landing Page](https://www.figma.com/design/oyIlJBp2HoXYWXILD7VAlo/AI-Healthcare-Landing-Page)

---

**Built with ❤️ for better healthcare in Nigeria**
