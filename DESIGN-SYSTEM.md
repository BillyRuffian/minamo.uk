# Minamo Design System

A minimal, brutalist design system for the Minamo Interiors website with a focus on monochrome aesthetics, line-based grids, and strong visual hierarchy.

## Design Philosophy

- **Brutalist Minimalism**: Stark monochrome palette with strong border lines
- **Line-Based Grid**: Borders create spatial divisions instead of gaps
- **Typography-First**: Montserrat as the primary typeface with careful attention to scale and spacing
- **Content-Focused**: Minimal decoration, letting content and structure speak
- **Responsive**: Mobile-first approach with seamless scaling across devices
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation

## Color System

### Light Mode (Default)

```css
Background:     #fafafa  /* Off-white */
Surface:        #ffffff  /* White */
Surface Alt:    #f5f5f5  /* Subtle gray tint */

Text Primary:   #1a1a1a  /* Near black */
Text Secondary: #666666  /* Medium gray */
Text Tertiary:  #999999  /* Light gray */

Border:         #1a1a1a  /* Near black - strong borders */
Border Hover:   #000000  /* Pure black on interaction */

Accent:         #1a1a1a  /* Brand black */
Accent Hover:   #000000  /* Darker on hover */
```

### Dark Mode

```css
Background:     #0a0a0a  /* Near black */
Surface:        #1a1a1a  /* Dark surface */
Surface Alt:    #141414  /* Slightly lighter surface */

Text Primary:   #fafafa  /* Off-white text */
Text Secondary: #999999  /* Medium gray */
Text Tertiary:  #666666  /* Dark gray */

Border:         #fafafa  /* Off-white borders */
Border Hover:   #ffffff  /* Pure white on interaction */

Accent:         #fafafa  /* Brand white */
Accent Hover:   #ffffff  /* Brighter on hover */
```

## Typography

### Font Stack

**Primary:** Montserrat (Google Fonts)
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Type Scale

```
4xl:  4rem    (64px)  - Hero titles
3xl:  3rem    (48px)  - Page titles
2xl:  2rem    (32px)  - Section headings
xl:   1.5rem  (24px)  - Subsections
lg:   1.25rem (20px)  - Card titles
base: 1rem    (16px)  - Body text
sm:   0.875rem (14px) - Small text
xs:   0.75rem  (12px) - Metadata
```

### Font Weights

```
Light:     300
Normal:    400
Medium:    500
Semibold:  600
Bold:      700
```

### Letter Spacing

```
Tight:   -0.02em  (Headlines)
Normal:   0       (Body)
Wide:     0.05em  (Labels)
Wider:    0.1em   (UI elements)
Widest:   0.2em   (Brand name)
```

### Line Heights

```
Tight:    1.2   (Headlines)
Normal:   1.5   (Body text)
Relaxed:  1.75  (Long-form content)
```

## Spacing Scale

Based on 8px increments:

```
xs:   0.5rem  (8px)
sm:   1rem    (16px)
md:   1.5rem  (24px)
lg:   2rem    (32px)
xl:   3rem    (48px)
2xl:  4rem    (64px)
3xl:  6rem    (96px)
```

## Layout

### Container

- Max width: 1400px
- Padding: 24px (all devices)
- Centered with auto margins
- Borders on left/right align with header borders

### Grid System

**Line-Based Grid System** - Uses CSS Grid with borders instead of gaps:

```css
.grid       /* Base grid with outer border */
.grid-2     /* 2 columns → 1 on mobile */
.grid-3     /* 3 columns → 2 on tablet → 1 on mobile */
.grid-4     /* 4 columns → 2 on tablet → 1 on mobile */
```

**Key Characteristics:**
- `gap: 0` - No gaps between grid items
- Borders on grid children create visual separation
- 2px border width for strong visual presence
- Last row items have no bottom border
- Last column items have no right border

**Usage:**
- For card grids (projects, services)
- For content with borders (not general layout)
- Children should have internal padding (e.g., `padding: var(--space-xl)`)

**Layout Grids:**
For general layout (without borders), use inline CSS grid with gaps:
```css
style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-2xl);"
```

### Breakpoints

```
Mobile:         320px - 639px
Tablet:         640px - 1023px
Desktop:        1024px - 1399px
Large Desktop:  1400px+
```

## Utility Classes

### Spacing Utilities

**Margin Top:**
```css
.mt-xs   /* 8px */
.mt-sm   /* 16px */
.mt-md   /* 24px */
.mt-lg   /* 32px */
.mt-xl   /* 48px */
.mt-2xl  /* 64px */
.mt-3xl  /* 96px */
```

**Margin Bottom:**
```css
.mb-xs   /* 8px */
.mb-sm   /* 16px */
.mb-md   /* 24px */
.mb-lg   /* 32px */
.mb-xl   /* 48px */
.mb-2xl  /* 64px */
.mb-3xl  /* 96px */
```

### Text Utilities

**Colors:**
```css
.text-primary     /* Primary text color */
.text-secondary   /* Secondary text color */
.text-tertiary    /* Tertiary text color */
```

**Alignment:**
```css
.text-center  /* Center aligned text */
.text-left    /* Left aligned text */
.text-right   /* Right aligned text */
```

**Size:**
```css
.text-xs    /* 12px */
.text-sm    /* 14px */
.text-base  /* 16px */
.text-lg    /* 20px */
.text-xl    /* 24px */
.text-2xl   /* 32px */
.text-3xl   /* 48px */
.text-4xl   /* 64px */
```

**Weight:**
```css
.font-light     /* 300 */
.font-normal    /* 400 */
.font-medium    /* 500 */
.font-semibold  /* 600 */
.font-bold      /* 700 */
```

**Tracking (Letter Spacing):**
```css
.tracking-tight   /* -0.02em */
.tracking-normal  /* 0 */
.tracking-wide    /* 0.05em */
.tracking-wider   /* 0.1em */
.tracking-widest  /* 0.2em */
```

## Components

### Cards

**Base Card** (`.card`)
- White/surface background
- No border (grid provides borders)
- Border radius: 0 (sharp corners for brutalist aesthetic)
- Internal padding: 32px (`var(--space-lg)`)
- Hover: Background changes to surface-alt
- Transition: 250ms ease

**Card Structure:**
```html
<article class="card">
  <div class="card-image-wrapper">
    <img src="..." class="card-image">
  </div>
  <div class="card-content">
    <p class="card-category">Category</p>
    <h3 class="card-title">Title</h3>
    <p class="card-description">Description</p>
  </div>
</article>
```

**Clickable Cards:**
Cards can be wrapped in links for navigation:
```html
<a href="project.html" style="text-decoration: none; color: inherit;">
  <article class="card">
    <!-- card content -->
  </article>
</a>
```

**Minimal Card** (`.card-minimal`)
- Transparent background
- No border
- Larger padding: 48px (`var(--space-xl)`)
- Hover: No effect (static)
- Used for text-heavy content like services

**Standalone Cards:**
Cards outside of grids automatically get borders:
```css
.card:not(.grid > .card) {
  border: var(--border-width) solid var(--color-border);
}
```

### Buttons

**Default Button** (`.btn`)
- Border: 2px solid
- Padding: 16px 32px
- Border radius: 0 (sharp corners)
- Font: 14px, medium weight, uppercase, wide spacing
- Hover: Background fills with border color

**Primary Button** (`.btn-primary`)
- Filled with accent color (near-black in light mode)
- White/light text
- Hover: Pure black background

**Large Button** (`.btn-large`)
- Padding: 24px 48px
- Font: 16px

### Navigation

**Header:**
- Sticky positioning
- 80px height
- 2px border bottom
- Centered content (max-width: 1400px)
- Left/right borders align with page grid

**Nav Links:**
- Small, uppercase, wide spacing
- No underline by default
- Hover: Color changes
- Active state indicator

**Logo:**
- Text-only (images hidden via CSS)
- Uppercase, wide letter spacing

**Mobile Menu:**
- Hamburger toggle (< 768px)
- Slide-in drawer from right
- Full-height overlay

### Forms

**Input Fields:**
- Full width
- 16px padding
- 2px border
- Border radius: 0 (sharp corners)
- Focus: Accent color border (pure black/white)

**Labels:**
- Small, uppercase, wide spacing
- Secondary text color

**Textarea:**
- Min height: 150px
- Vertical resize only

### Footer

- 2px border top
- 4-column grid (responsive)
- Link sections: Navigate, Services, Connect, Contact
- Bottom bar: Copyright + legal links
- Centered content (max-width: 1400px)
- Left/right borders align with page grid

### Project Pages

**Project Page Classes:**

```css
.back-link              /* Back navigation link */
.project-title          /* Main project title (3xl, light) */
.project-description    /* Intro paragraph */
.project-details-title  /* Section heading (small, uppercase) */
.project-details-grid   /* 2-column grid for details */
.project-detail-label   /* Detail label (small, secondary) */
.project-detail-value   /* Detail value (medium weight) */
.grid-cell-padding      /* Standard padding for grid cells */
.project-image          /* Responsive images */
.project-section-heading /* Section heading (xl, light) */
.project-text           /* Body text with proper spacing */
.materials-list         /* Styled list for materials */
.section-alt            /* Alternative section background */
```

**Project Page Structure:**
```html
<section class="section">
  <div class="container">
    <a href="projects.html" class="back-link">← Back to Projects</a>
    
    <div class="grid grid-2">
      <div class="grid-cell-padding">
        <h1 class="project-title">Project Name</h1>
        <p class="project-description">Description...</p>
        
        <h3 class="project-details-title">Project Details</h3>
        <div class="project-details-grid">
          <div>
            <p class="project-detail-label">Location</p>
            <p class="project-detail-value">London, UK</p>
          </div>
        </div>
      </div>
      
      <div class="grid-cell-padding">
        <img src="..." alt="..." class="project-image">
      </div>
    </div>
  </div>
</section>
```

## Theme Toggle

JavaScript-powered light/dark mode:

```javascript
// Toggle stored in localStorage
// Applied via data-theme="dark" on <html>
// Button updates text: "Light" / "Dark"
```

## Usage Examples

### Creating a Page Section with Cards

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Title</h2>
      <p class="section-description">Description</p>
    </div>
    
    <div class="grid grid-3">
      <!-- Cards are wrapped in links -->
      <a href="project.html" style="text-decoration: none; color: inherit;">
        <article class="card">
          <!-- card content -->
        </article>
      </a>
    </div>
  </div>
</section>
```

### Creating a Layout Section with Grids (No Borders)

```html
<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-2xl);">
      <div style="padding: var(--space-xl);">
        <h2>Content on left</h2>
        <p>Text content...</p>
      </div>
      <div style="padding: var(--space-xl);">
        <img src="..." alt="...">
      </div>
    </div>
  </div>
</section>
```

### Creating a Line-Based Grid with Content (Borders)

```html
<section class="section">
  <div class="container">
    <div class="grid grid-2">
      <div class="grid-cell-padding">
        <h2>Content with padding</h2>
        <p>Text inside grid cell...</p>
      </div>
      <div class="grid-cell-padding">
        <img src="..." alt="..." class="project-image">
      </div>
    </div>
  </div>
</section>
```

### Using Utility Classes

```html
<!-- Typography -->
<h2 class="text-2xl mb-lg">Heading</h2>
<p class="text-secondary">Secondary text</p>

<!-- Spacing -->
<div class="mt-xl mb-2xl">Content with margins</div>

<!-- Alignment -->
<div class="text-center">Centered text</div>

<!-- Colors -->
<p class="text-primary">Primary color text</p>
<p class="text-secondary">Secondary color text</p>
```

## File Structure

```
minamo.uk/
├── design-system.css    # Variables, reset, utilities
├── components.css       # Component styles
├── theme-toggle.js      # Light/dark mode
├── main.js             # Interactions
├── index.html          # Homepage
├── projects.html       # Projects gallery
├── project.html        # Individual project detail page
├── services.html       # Services listing
├── about.html          # About page
├── contact.html        # Contact form
└── minamo-logo.png     # Brand logo (hidden in CSS)
```

## Best Practices

1. **Use CSS Variables:** Reference `var(--color-text-primary)` instead of hex codes
2. **Spacing Scale:** Use the defined spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)
3. **Semantic HTML:** Use appropriate elements (`<article>`, `<section>`, `<nav>`)
4. **Accessibility:** Include ARIA labels, alt text, and keyboard navigation
5. **Mobile-First:** Design for mobile, enhance for desktop
6. **Grid System:** Use `.grid` classes only for bordered card layouts
7. **Grid Cell Padding:** Use `.grid-cell-padding` class for consistent padding in grid cells
8. **Layout Grids:** Use inline CSS grid with gaps for general layout (when no borders needed)
9. **Theme Support:** Test in both light and dark modes
10. **Sharp Corners:** Border radius is 0 for brutalist aesthetic
11. **Strong Borders:** 2px borders create visual structure
12. **No Inline Styles:** Use CSS classes instead of inline styles for maintainability
13. **Utility Classes:** Use utility classes (`.mt-xl`, `.text-center`) for common patterns
14. **Semantic Classes:** Use semantic class names (`.project-title`, `.back-link`) for specific components

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Android (last 2 versions)

## Performance

- Google Fonts preconnect for faster loading
- Minimal JavaScript (< 5KB total)
- CSS custom properties for efficient theming
- Optimized transitions (transform/opacity only)

## Future Enhancements

- [x] Monochrome color system
- [x] Line-based grid layout
- [x] Project detail pages
- [ ] Dynamic project content (CMS integration)
- [ ] Filter/sort functionality for projects
- [ ] Intersection Observer for scroll animations
- [ ] Newsletter signup integration
- [ ] Blog/journal section
- [ ] Image lightbox/gallery viewer

## Design Inspiration

- **Minimalissimo.com** - Line-based grid system, monochrome palette
- **Brutalist web design** - Raw, unpolished aesthetic with strong structure
- **Swiss design** - Grid systems, typography hierarchy

---

**Version:** 2.0.0  
**Last Updated:** October 2025  
**Maintainer:** Minamo Interiors
