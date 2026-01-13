# SpeakLingo Landing Page

A modern, animated landing page for SpeakLingo - a voice-to-text application with grammar correction and English learning features.

## Routes

- **`/`** - Main landing page showcasing SpeakLingo's core features
- **`/education`** - Education-focused landing page targeting students and educational institutions

## Tech Stack

- **Next.js 15.3.6** - React framework with App Router
- **React 19** - UI library
- **Framer Motion** - Animation library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Lucide React** - Icon library

## Features

### Main Landing Page (`/`)
- Hero section with animated voice demo
- Five modes showcase (Speak, Text, Search, Create, Learn)
- Feature highlights with interactive cards
- Testimonials section
- Pricing and CTA sections

### Education Landing Page (`/education`)
- Split-layout hero with live voice-to-text demo
- Three Pillars section (Productivity, Grammar Mastery, Spoken Confidence)
- Student Moments - interactive scenario cards with hover effects
- Step-by-step demo showing the correction flow
- Dual testimonials (Students + Institutions)
- Final CTA with achievement card metrics

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/asif-mp3/Speak_Lingo_Landing.git

# Navigate to the project
cd Speak_Lingo_Landing

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the main landing page.
Open [http://localhost:3000/education](http://localhost:3000/education) to view the education page.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── education/
│   │   └── page.tsx          # Education landing page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── sections/
│       ├── navigation.tsx    # Shared navigation
│       ├── footer.tsx        # Shared footer
│       ├── hero.tsx          # Main hero section
│       ├── pain-points.tsx   # Main pain points
│       └── education/        # Education page sections
│           ├── hero-edu.tsx
│           ├── three-pillars-section.tsx
│           ├── pain-section.tsx
│           ├── demo-section.tsx
│           ├── testimonials-section.tsx
│           ├── final-cta-section.tsx
│           └── shared/       # Shared components
│               ├── animated-blob.tsx
│               ├── waveform.tsx
│               ├── xp-counter.tsx
│               ├── confetti.tsx
│               └── typewriter.tsx
```

## Design System

- **Background**: `#FFFAE7` (cream yellow)
- **Primary**: `#0f172a` (navy)
- **Accent**: `#F9A825` (amber)
- **Secondary Accent**: `#FFD54F` (gold)
- **Card Radius**: `rounded-[40px]`
- **Shadows**: `shadow-[0_20px_50px_rgba(0,0,0,0.08)]`

## Deployment

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/asif-mp3/Speak_Lingo_Landing)

## License

MIT
