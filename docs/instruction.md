# Website Redesign Specification: Marcello Kabora

This document outlines the strategic and visual shift from the current "legacy" layout to a modern, high-conversion, and aesthetically premium portfolio.

## 1. Visual Identity Overhaul

### Color Palette

- **Primary (Background):** Rich Black (`#0A0A0A`) or Deep Charcoal (`#121212`).
- **Secondary (Surface):** Card Background (`#1E1E1E`) with a 1px border of Slate-800.
- **Accent:** Choose one "Electric" color (e.g., `Cyan-400` or `Violet-500`) for CTAs, focus states, and interactive elements.
- **Text:** `Zinc-100` for headings, `Zinc-400` for body text.

### Typography

- **Heading Font:** A bold, modern variable font like **Inter**, **Geist**, or **Plus Jakarta Sans**.
- **Body Font:** **Inter** (Regular/Medium) for maximum readability.
- **Code/Tech Font:** **JetBrains Mono** or **Fira Code** for technical snippets or labels.

### Modern Design Tokens

- **Border Radius:** Use a consistent `16px` or `24px` (Large) for all cards and images.
- **Backdrop Blur:** Use `backdrop-filter: blur(12px)` for navigation bars and modal overlays (Glassmorphism).
- **Transitions:** All hover states should use a `cubic-bezier(0.4, 0, 0.2, 1)` timing function for a "smooth" feel.

## 2. Structure & Layout (The "Antigravity" Blueprint)

### Section 1: The "Impact" Hero

- **Current:** Thin header, static network graphic, standard centered text.
- **New:**
  - Full Viewport Height (`80-90vh`).
  - **Background:** Subtle animated "Mesh Gradient" or a 3D spline scene.
  - **Typography:** Massive H1 (e.g., "Designing the Future of Digital Experiences").
  - **CTA:** Primary button with a subtle "glow" effect on hover.

### Section 2: The Bento Grid (Bio & Stats)

- **Concept:** Instead of a long paragraph, break your "About" into a grid of cards.
  - **Large Card (2x2):** Brief introduction and photo.
  - **Wide Card (2x1):** Current tech stack using scrolling icons.
  - **Small Card (1x1):** Years of experience.
  - **Small Card (1x1):** Number of products launched.

### Section 3: Product Showcase (The Masonry Grid)

- **Current:** Uniform 3-column grid with small thumbnails.
- **New:**
  - **Visual Hierarchy:** Make your "Star" products larger (2-column span) and others smaller.
  - **Interaction:** On hover, the image should slightly scale up, and a blurred overlay should appear with a "View Project" link.
  - **Tags:** Use small, high-contrast "pills" for technology tags (e.g., `[React]` `[Node.js]`).

### Section 4: Experience & Process

- **Current:** Alternating "Z-pattern" text and images.
- **New:** A vertical "Scroll-triggered" timeline. As the user scrolls, the active year or role highlights while the background image changes or follows.

## 3. Functional Requirements for Antigravity

- **Dark Mode Default:** The site should lead with a dark theme but include a smooth toggle for light mode.
- **Smooth Scrolling:** Implement **Lenis** or similar for a luxurious scrolling feel.
- **Micro-interactions:**
  - Button "magnetic" hover effects.
  - Custom cursor that changes shape when hovering over clickable elements.
- **Responsive breakpoints:** Ensure the "Bento Grid" stacks perfectly into a single column for mobile users without losing the "card" aesthetic.

## 4. Content Checklist

- [ ] Replace low-res thumbnails with high-quality device mockups (showing sites inside laptops/phones).
- [ ] Rewrite "Values" section to be more "Benefits" focused (What value do you bring to a client?).
- [ ] Consolidate social links into a floating "Dock" or a minimal footer.
