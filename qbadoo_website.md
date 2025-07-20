# QbaDoo Website Development Guide

## Project Overview
QbaDoo is an AR storytelling app that transforms cultural heritage sites into interactive adventures. The website should showcase the app's features, attract users and B2B partners, and drive app downloads.

## Brand Identity

### Color Palette
- **Primary Brand Colors:**
  - Terracotta: `#FF6B35` (Logo, primary CTAs, key brand visuals)
  - Sardinian Clay: `#D2691E` (Secondary CTAs, content panels)
  - Warm Sand: `#F4A460` (Backgrounds, section dividers, UI fill)
  - Ancient Stone: `#8B4513` (Body text, borders, shadow tones)

- **Accent Colors:**
  - Cobalt Blue: `#0047AB` (Navigation buttons, AR triggers, links)
  - Coral: `#FF5E6C` (Emotional accents, Berritta quotes, playful elements)

### Typography
- **Storytelling/Headers:** Lora (serif) - for folkloric/historical feel
- **UI/Body Text:** Manrope (sans-serif) - for legibility
- **Character Quotes:** Mix both fonts

### Voice & Tone
- Curious & wondering
- Playfully informal
- Respectfully irreverent
- Story-driven
- Example: "Okay, this story is going to sound completely bonkers, but..."

## Website Structure

### 1. Homepage (Hero Section)
**Objective:** Attract attention, convey brand essence, guide to download

**Content:**
- **Hero CTA:** "Scopri la tua prossima avventura in AR con QbaDoo!"
- **Primary Button:** "Scarica l'App" (Terracotta background)
- **Secondary Button:** "Guarda una Demo" (Cobalt Blue outline)
- **Berritta Animation/Illustration:** Waving or saying "Eh, ti racconto una storia che non troverai nei libri..."
- **One-line Description:** "QbaDoo trasforma i siti culturali in avventure in realtà aumentata — storie locali, misteri nascosti, giochi e risate."

### 2. Come Funziona (How It Works)
**Objective:** Explain app functionality simply and visually

**Content:**
- **3-Step Process (with icons):**
  1. "Scegli una città" (map/location icon)
  2. "Segui Berritta" (character icon, berritta.png in assets/)
  3. "Vivi la storia" (AR/castle icon)
- **Differentiator:** "Niente QR code. Niente attrezzature. Solo storie, geolocalizzazione e il tuo smartphone."
- **Visual:** Infographic or animated demo

### 3. Destinazioni (Destinations)
**Objective:** Showcase supported locations, create curiosity

**Content:**
- **Featured Destinations Grid:**
  - Nulvi (lucia.png in assets/)
  - Alghero (alghero.png in assets/)
  - Nuraghe Su Nuraxi (nuraghe.png in assets/)
  - Bosa (bosa.png in assets/)
- **Each destination includes:**
  - Illustrated card
  - Brief description
  - Berritta quote (in italics, Coral color)
- **CTA:** "Non trovi la tua città? Segnalacela!"

### 4. Per Famiglie & Viaggiatori (Target Audiences)
**Objective:** Speak directly to primary targets

**Content:**
- **Families Section:**
  - "Edutainment divertente, senza schermo passivo"
  - "Gioco condiviso genitori-figli"
- **Travelers Section:**
  - "Scopri storie assurde, misteri locali, esplora in modo nuovo"
  - "Nessuna guida noiosa, solo giochi e leggende"

### 5. Per Enti Culturali (B2B Partners)
**Objective:** B2B section for cultural institutions

**Content:**
- **Partnership Benefits:** Zero infrastructure, modern visitor experience, data analytics
- **Offering Tiers:** Standard / Premium / Enterprise
- **CTA:** "Richiedi una Demo" form
- **Social Proof:** Testimonial from pilot site

### 6. Chi Siamo (About Us)
**Objective:** Convey passion, reliability, professional background

**Content:**
- **Mission Statement:** From brand book
- **Team Section:** Photos + brief bios
- **Origin Story:** "Siamo stanchi di vedere i bambini annoiarsi nei musei..."
- **Berritta Connection:** Link to character's origin

### 7. Scarica l'App (Download)
**Objective:** Direct conversion

**Content:**
- **App Store Badges:** iOS and Android
- **Compatibility:** "Funziona su tutti gli smartphone moderni"
- **Trial Offer:** "Prova gratuita nella tua città"
- **Quick FAQ:** Data requirements, offline functionality, connectivity needs

### 8. Footer/Contatti (Contact)
**Content:**
- Contact form
- Email: patedde@proton.me
- Social media links
- Company address (optional)

## Design Requirements

### Layout & Navigation
- **Single-page application** with smooth scrolling navigation
- **Mobile-first responsive design**
- **Sticky navigation** with section anchors
- **Smooth scroll transitions** between sections

### Visual Elements
- **Berritta Character Integration:** Appears throughout with contextual quotes and animations
- **Illustrated Destinations:** Custom illustrations matching the warm, storybook aesthetic
- **Interactive Elements:** Hover effects on cards, animated CTAs
- **Consistent Icons:** Custom icon set matching the brand style

### Accessibility
- **Color Contrast:** All color combinations meet WCAG 2.1 AA standards
- **Font Sizing:** Scalable typography
- **Alt Text:** For all images and illustrations
- **Keyboard Navigation:** Full site accessible via keyboard

## Technical Specifications

### Performance
- **Fast Loading:** Optimized images and minimal dependencies
- **SEO Optimized:** Proper meta tags, structured data
- **Analytics Ready:** Google Analytics integration points

### Content Management
- **Easy Updates:** Modular design for easy content updates
- **Image Optimization:** Responsive images with proper sizing
- **Form Handling:** Contact forms with validation

## Sample Content

### Berritta Quotes for Destinations
- **Firenze:** "Ah, Firenze! Even the stones here have secrets to tell..."
- **Alghero:** "This tower has seen pirates, lovers, and one very confused donkey..."
- **Su Nuraxi:** "Su Nuraxi? Oh, lì c'era una capra che cambiò il destino di un re..."
- **Verona:** "Romeo and Juliet? Please, I know stories that make theirs look like a fairy tale..."

### Call-to-Action Variations
- Primary: "Scarica l'App" / "Download the App"
- Secondary: "Scopri di Più" / "Learn More"
- B2B: "Richiedi Demo" / "Request Demo"
- Engagement: "Inizia l'Avventura" / "Start Your Adventure"

## Notes for Implementation
- Use CSS Grid and Flexbox for responsive layouts
- Implement smooth scrolling with CSS `scroll-behavior: smooth`
- Consider CSS animations for Berritta character interactions
- Ensure all interactive elements have proper hover and focus states
- Test thoroughly on mobile devices for touch interactions