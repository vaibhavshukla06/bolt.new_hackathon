# 🚀 The World's Largest Hackathon Website

![Hackathon Website Preview](/public/images/preview.svg)

A responsive, interactive single-page website for a global hackathon event, built with Next.js and Tailwind CSS.

## 🌟 Features

- **Modern, Responsive Design**: Optimized for all device sizes
- **Single-Page Application**: Smooth scrolling between sections
- **Interactive Components**: Expandable sections with "Show More" functionality
- **Dark Mode Support**: Automatic theme detection and styling
- **Accessibility**: ARIA-compliant, keyboard navigable interface

## 🧰 Tech Stack

- **Next.js 14**: App Router, Server Components, Client Components
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animations and transitions
- **React Icons**: Comprehensive icon library

## 📋 Sections

- **Hero Section**: Eye-catching introduction with call-to-action
- **About**: Information about the hackathon's mission and process
- **Prizes**: Showcase of main prizes and special categories
- **Sponsors**: Information about sponsorship tiers and benefits
- **Judges**: Profiles of the judging panel and judging criteria
- **Rules**: Event rules and guidelines with collapsible sections
- **FAQ**: Searchable frequently asked questions
- **Contact**: Contact form and newsletter signup

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/hackathon-website.git
cd hackathon-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
hackathon-website/
├── app/                     # App Router directory
│   ├── page.tsx             # Main homepage (single-page app)
│   ├── layout.tsx           # Root layout with metadata
│   └── globals.css          # Global styles
├── components/              # React components
│   └── sections/            # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── PrizesSection.tsx
│       ├── SponsorsSection.tsx
│       ├── JudgesSection.tsx
│       ├── RulesSection.tsx
│       ├── FaqSection.tsx
│       └── ContactSection.tsx
├── public/                  # Static files
│   └── images/              # Images for the website
└── package.json             # Project dependencies
```

## 🌐 Deployment

The website can be easily deployed on [Vercel](https://vercel.com/) or any other Next.js-compatible hosting platform.

```bash
npm run build
# or
yarn build
```

## 📝 License

MIT License - feel free to use this code for your next hackathon or event!
