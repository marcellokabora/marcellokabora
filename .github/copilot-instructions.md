# Marcello Annicchiarico Portfolio - Design System & Development Guide

This document outlines the strategic and visual shift from the current "legacy" layout to a modern, high-conversion, and aesthetically premium portfolio.

## 1. Visual Identity & Color System

### Color Palette (Dark Mode - Default)

#### Primary Colors (Purple/Violet)

- `--color-primary-50: #faf5ff` - Lightest purple (rarely used in dark mode)
- `--color-primary-100: #f3e8ff`
- `--color-primary-200: #e9d5ff`
- `--color-primary-300: #d8b4fe`
- `--color-primary-400: #c084fc` - **Primary accent for CTAs**
- `--color-primary-500: #a855f7` - **Primary brand color**
- `--color-primary-600: #9333ea` - **Primary hover state**
- `--color-primary-700: #7e22ce`
- `--color-primary-800: #6b21a8`
- `--color-primary-900: #581c87`
- `--color-primary-950: #3b0764` - Darkest purple

#### Secondary Colors (Cyan/Aqua)

- `--color-secondary-50: #ecfeff` - Lightest cyan (rarely used in dark mode)
- `--color-secondary-100: #cffafe`
- `--color-secondary-200: #a5f3fc`
- `--color-secondary-300: #67e8f9`
- `--color-secondary-400: #22d3ee` - **Secondary accent for highlights**
- `--color-secondary-500: #06b6d4` - **Secondary brand color**
- `--color-secondary-600: #0891b2` - **Secondary hover state**
- `--color-secondary-700: #0e7490`
- `--color-secondary-800: #155e75`
- `--color-secondary-900: #164e63`
- `--color-secondary-950: #083344` - Darkest cyan

#### Base Colors (Dark Mode)

- `--bg-color: #0a0a0a` - **Primary background (Rich Black)**
- `--background-secondary: #1a1a1a` - **Card/Surface background**
- `--text-primary: #ffffff` - **Primary text color**
- `--text-secondary: #a0a0a0` - **Secondary text color (descriptions, captions)**
- `--border-color: #27272a` - **Border color (Zinc-800)**

#### Usage Guidelines for Dark Mode

**DO:**

- Use `--bg-color (#0a0a0a)` for main background
- Use `--background-secondary (#1a1a1a)` for cards, dialogs, elevated surfaces
- Use `primary-400` or `primary-500` for primary CTAs, links, and focus states
- Use `secondary-400` or `secondary-500` for secondary accents, badges, highlights
- Use `--text-primary (#ffffff)` for headings and important text
- Use `--text-secondary (#a0a0a0)` for body text, descriptions
- Use `--border-color (#27272a)` for borders and dividers

**DON'T:**

- Don't use light variants (50-200) of primary/secondary colors on dark backgrounds
- Don't use pure black (#000000) - always use `--bg-color (#0a0a0a)`
- Don't use pure white text on colored buttons (reduce opacity to 90-95% for better contrast)

### Typography

- **Heading Font:** **Work Sans** (current) - Bold, modern sans-serif
- **Body Font:** **Work Sans** (current) - Regular/Medium for readability
- **Code/Tech Font:** **JetBrains Mono** or **Fira Code** for technical snippets or labels

### Modern Design Tokens

- **Border Radius:**
  - Small: `8px` (buttons, pills)
  - Medium: `16px` (cards, inputs)
  - Large: `24px` (large cards, images)
- **Backdrop Blur:** `backdrop-filter: blur(12px)` for navigation bars and modal overlays (Glassmorphism)
- **Transitions:** All hover states should use `cubic-bezier(0.4, 0, 0.2, 1)` timing function for a "smooth" feel
- **Shadows (Dark Mode):**
  - Subtle: `0 1px 3px rgba(0, 0, 0, 0.3)`
  - Medium: `0 4px 6px rgba(0, 0, 0, 0.4)`
  - Large: `0 10px 25px rgba(0, 0, 0, 0.5)`
  - Glow (for accents): `0 0 20px rgba(168, 85, 247, 0.3)` (primary), `0 0 20px rgba(6, 182, 212, 0.3)` (secondary)

## 2. Structure & Layout (The "Antigravity" Blueprint)

### Section 1: The "Impact" Hero

- **Current:** Thin header, static network graphic, standard centered text.
- **New:**
  - Full Viewport Height (`80-90vh`).
  - **Background:** Subtle animated "Mesh Gradient" or a 3D spline scene using dark mode colors
  - **Typography:** Massive H1 (e.g., "Designing the Future of Digital Experiences") with `--text-primary`
  - **CTA:** Primary button with `primary-500` background and subtle glow effect on hover using primary color

### Section 2: The Bento Grid (Bio & Stats)

- **Concept:** Instead of a long paragraph, break your "About" into a grid of cards with `--background-secondary`
  - **Large Card (2x2):** Brief introduction and photo with `--text-primary` headings
  - **Wide Card (2x1):** Current tech stack using scrolling icons with `secondary-400` accents
  - **Small Card (1x1):** Years of experience with `primary-400` highlight
  - **Small Card (1x1):** Number of products launched with `secondary-400` highlight

### Section 3: Product Showcase (The Masonry Grid)

- **Current:** Uniform 3-column grid with small thumbnails.
- **New:**
  - **Visual Hierarchy:** Make your "Star" products larger (2-column span) and others smaller
  - **Interaction:** On hover, the image should slightly scale up, and a blurred overlay (using `--background-secondary` with 80% opacity) should appear with a "View Project" link in `primary-400`
  - **Tags:** Use small, high-contrast pills for technology tags with `primary-600` or `secondary-600` background

### Section 4: Experience & Process

- **Current:** Alternating "Z-pattern" text and images.
- **New:** A vertical "Scroll-triggered" timeline. As the user scrolls, the active year or role highlights with `primary-400` while inactive items use `--text-secondary`

## 3. Functional Requirements for Dark Mode

### Dark Mode Implementation (Current State: Default Dark)

- **Dark Mode Default:** The site leads with a dark theme (current implementation)
- **Light Mode Toggle:** Include a smooth toggle for light mode (future enhancement)
- **Color Adaptation:**
  - Light mode should invert: use `primary-600` as primary color, `secondary-600` as secondary
  - Backgrounds: white or `zinc-50` for main, `zinc-100` for cards
  - Text: `zinc-900` for primary, `zinc-600` for secondary
  - Borders: `zinc-200`

### Interactive Elements

- **Smooth Scrolling:** Implement **Lenis** or similar for a luxurious scrolling feel
- **Micro-interactions:**
  - Button "magnetic" hover effects with subtle scale transform
  - Custom cursor that changes shape when hovering over clickable elements
  - Glow effects on hover using `box-shadow: 0 0 20px rgba(168, 85, 247, 0.3)`
- **Responsive breakpoints:** Ensure the "Bento Grid" stacks perfectly into a single column for mobile users without losing the "card" aesthetic

## 4. Component Styling Guidelines

### Buttons

```css
/* Primary CTA */
background: var(--color-primary-500);
color: var(--text-primary);
border-radius: 8px;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover */
background: var(--color-primary-600);
box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
```

### Cards

```css
background: var(--background-secondary);
border: 1px solid var(--border-color);
border-radius: 16px;
backdrop-filter: blur(12px);
```

### Links & Navigation

```css
color: var(--color-primary-400);
transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover */
color: var(--color-primary-300);
```

## 5. Technology Stack

- **Framework:** SvelteKit
- **Styling:** Tailwind CSS + PostCSS
- **Language:** TypeScript
- **Backend:** Firebase (Authentication & Database)

## 5.1 Code Style Rules

### Always Use Tailwind Inline Classes

**CRITICAL:** Never use `<style>` blocks in Svelte components. Always use Tailwind CSS utility classes directly in the HTML markup.

**DO:**

```svelte
<div class="min-h-screen bg-[#0a0a0a] p-6 pt-24">
  <h1 class="text-4xl font-bold text-white mb-4">Title</h1>
  <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
    Click me
  </button>
</div>
```

**DON'T:**

```svelte
<div class="container">
  <h1>Title</h1>
</div>

<style>
  .container {
    min-height: 100vh;
    padding: 6rem 1.5rem 4rem;
  }
</style>
```

### Tailwind Class Mapping for Design Tokens

| CSS Variable             | Tailwind Equivalent                 |
| ------------------------ | ----------------------------------- |
| `--bg-color`             | `bg-[#0a0a0a]`                      |
| `--background-secondary` | `bg-[#1a1a1a]`                      |
| `--text-primary`         | `text-white`                        |
| `--text-secondary`       | `text-[#a0a0a0]` or `text-zinc-400` |
| `--border-color`         | `border-zinc-800`                   |
| `--color-primary-400`    | `text-purple-400` / `bg-purple-400` |
| `--color-primary-500`    | `text-purple-500` / `bg-purple-500` |
| `--color-primary-600`    | `text-purple-600` / `bg-purple-600` |
| `--color-secondary-400`  | `text-cyan-400` / `bg-cyan-400`     |
| `--color-secondary-500`  | `text-cyan-500` / `bg-cyan-500`     |

### Common Patterns

```svelte
<!-- Card -->
<div class="bg-[#1a1a1a] border border-zinc-800 rounded-2xl backdrop-blur-xl p-6">

<!-- Primary Button -->
<button class="w-full py-3 px-6 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">

<!-- Input Field -->
<input class="w-full py-3 px-4 bg-[#0a0a0a] border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-[3px] focus:ring-purple-500/10 transition-all duration-300" />

<!-- Error State -->
<input class="border-red-500 focus:ring-red-500/10" />

<!-- Link -->
<a class="text-purple-400 hover:text-purple-300 transition-colors duration-200">
```

## 6. Content Checklist

- [ ] Replace low-res thumbnails with high-quality device mockups (showing sites inside laptops/phones)
- [ ] Ensure all images have proper contrast against `--bg-color`
- [ ] Rewrite "Values" section to be more "Benefits" focused (What value do you bring to a client?)
- [ ] Consolidate social links into a floating "Dock" or a minimal footer
- [ ] Add subtle animations to enhance the dark mode experience
- [ ] Test all interactive elements for visibility and contrast in dark mode

## 7. File Structure Reference

- **Components:** `/src/lib/components/`
- **Styles:** `/src/lib/styles/app.css` (design tokens), `/src/lib/styles/markup.css`
- **Types:** `/src/lib/types/`
- **Config:** `/src/lib/config/firebase.ts`
- **Routes:** `/src/routes/`
- **Static Assets:** `/static/`
