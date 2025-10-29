# Minamo Design System

A minimal, brutalist design system for the Minamo Interiors website. Inspired by contemporary minimalist design with a focus on typography, whitespace, and content-first layouts.

## Design Philosophy

- **Brutalist Minimalism**: Clean lines, generous whitespace, and clear hierarchy
- **Typography-First**: Montserrat as the primary typeface with careful attention to scale and spacing
- **Content-Focused**: Minimal chrome, letting content breathe
- **Responsive**: Mobile-first approach with seamless scaling across devices
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation

## Color System

### Light Mode (Default)

```css
Background:     #fdf8f0  /* Light cream */
Surface:        #ffffff  /* White */
Surface Alt:    #f5f0e8  /* Subtle cream tint */

Text Primary:   #1b4c3f  /* Deep green */
Text Secondary: #5a7a6f  /* Medium green */
Text Tertiary:  #8a9e95  /* Light green */

Border:         #e8e0d5  /* Light border */
Border Hover:   #d5cdc0  /* Darker on interaction */

Accent:         #1b4c3f  /* Brand green */
Accent Hover:   #143b30  /* Darker on hover */
```

### Dark Mode

```css
Background:     #1a1a1a  /* Near black */
Surface:        #222222  /* Dark surface */
Surface Alt:    #2a2a2a  /* Lighter surface */

Text Primary:   #e8e0d5  /* Cream text */
Text Secondary: #a39d94  /* Medium gray */
Text Tertiary:  #787268  /* Dark gray */

Border:         #2a2a2a  /* Subtle border */
Border Hover:   #3a3a3a  /* Lighter on interaction */

Accent:         #7ca894  /* Soft green */
Accent Hover:   #8fb9a4  /* Lighter on hover */
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
- Padding: 24px (mobile) / 24px (tablet+)
- Centered with auto margins

### Grid System

Uses CSS Grid with responsive columns:

```css
.grid-2   /* 2 columns → 1 on mobile */
.grid-3   /* 3 columns → 2 on tablet → 1 on mobile */
.grid-4   /* 4 columns → 2 on tablet → 1 on mobile */
```

Gap: 32px default

### Breakpoints

```
Mobile:         320px - 639px
Tablet:         640px - 1023px
Desktop:        1024px - 1399px
Large Desktop:  1400px+
```

## Components

### Cards

**Base Card** (`.card`)
- White/surface background
- 1px border
- 4px border radius
- Hover: Slight elevation (translateY)
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

**Minimal Card** (`.card-minimal`)
- Transparent background
- No border
- Hover: Background tint

### Buttons

**Default Button** (`.btn`)
- Border: 1px solid
- Padding: 16px 32px
- Font: 14px, medium weight, uppercase, wide spacing
- Hover: Border color changes to accent

**Primary Button** (`.btn-primary`)
- Filled with accent color
- White text
- Hover: Darker accent

**Large Button** (`.btn-large`)
- Padding: 24px 48px
- Font: 16px

### Navigation

**Header:**
- Sticky positioning
- 80px height
- Border bottom
- Flex layout: logo left, nav right

**Nav Links:**
- Small, uppercase, wide spacing
- Underline animation on hover
- Active state indicator

**Mobile Menu:**
- Hamburger toggle (< 768px)
- Slide-in drawer from right
- Full-height overlay

### Forms

**Input Fields:**
- Full width
- 16px padding
- 1px border
- 4px border radius
- Focus: Accent color border

**Labels:**
- Small, uppercase, wide spacing
- Secondary text color

**Textarea:**
- Min height: 150px
- Vertical resize only

### Footer

- Border top
- 4-column grid (responsive)
- Link sections: Navigate, Services, Connect, Contact
- Bottom bar: Copyright + legal links

## Theme Toggle

JavaScript-powered light/dark mode:

```javascript
// Toggle stored in localStorage
// Applied via data-theme="dark" on <html>
// Button updates text: "Light" / "Dark"
```

## Usage Examples

### Creating a Page Section

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Title</h2>
      <p class="section-description">Description</p>
    </div>
    
    <div class="grid grid-3">
      <!-- Cards here -->
    </div>
  </div>
</section>
```

### Using Utility Classes

```html
<h2 class="text-2xl font-semibold tracking-tight mb-lg">
  Heading with utilities
</h2>

<p class="text-secondary mt-md mb-xl">
  Paragraph with spacing
</p>
```

### Responsive Visibility

```html
<div class="hidden-mobile">Desktop only</div>
<div class="visible-mobile">Mobile only</div>
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
├── services.html       # Services listing
├── about.html          # About page
├── contact.html        # Contact form
└── minamo-logo.png     # Brand logo
```

## Best Practices

1. **Use CSS Variables:** Reference `var(--color-text-primary)` instead of hex codes
2. **Spacing Scale:** Use the defined spacing scale (xs, sm, md, etc.)
3. **Semantic HTML:** Use appropriate elements (`<article>`, `<section>`, `<nav>`)
4. **Accessibility:** Include ARIA labels, alt text, and keyboard navigation
5. **Mobile-First:** Design for mobile, enhance for desktop
6. **Consistent Cards:** Use the card component system for content
7. **Theme Support:** Test in both light and dark modes

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

- [ ] CSS Grid masonry layout for projects
- [ ] Intersection Observer for scroll animations
- [ ] Filter/sort functionality for projects
- [ ] Newsletter signup integration
- [ ] Blog/journal section
- [ ] Project detail pages with galleries

---

**Version:** 1.0.0  
**Last Updated:** October 2025  
**Maintainer:** Minamo Interiors
