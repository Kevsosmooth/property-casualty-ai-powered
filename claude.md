# Property & Casualty Insurance Study Guide - Claude Code Guidelines

## Project Overview
This is an interactive study guide for Property & Casualty Insurance licensing exams. The goal is to make complex insurance concepts **easy to learn, easy to understand, and actually retainable**.

---

## Content Philosophy

### Break Down Complex Terms
- **Never assume the reader knows legal/insurance jargon**
- When terms seem intimidating, break them down with:
  - Plain English explanations ("What does this mean in plain English?")
  - Real-world examples
  - Step-by-step breakdowns ("The Setup", "What Happens", "Who Pays?")
- Use analogies and relatable scenarios

### Make It Memorable (But Not Flashy)
- Use memory tricks and mnemonics (e.g., "ON WaWy" for monopolistic states)
- Subtle color-coded sections for visual organization
- "Exam Alert" callouts to highlight common mistakes
- Key numbers in highlighted boxes (but soft colors)

### Examples Are Essential
- Every complex concept needs at least one example
- Use "COVERED" vs "NOT COVERED" example pairs when explaining exclusions
- Make examples relatable (everyday situations)
- Examples must be crystal clear - reader should have NO doubt

---

## IMPORTANT: Visual Style Rules

### NO Emojis
- **Never use emojis anywhere in the content**
- Use text labels, icons (SVG), or numbered circles instead

### NO Gradient Backgrounds on Content
- **Never use `bg-gradient-to-r` or similar gradients on content boxes**
- Gradients are ONLY allowed on page headers (top of page)
- All content boxes use solid, soft colors

### Easy on the Eyes - Soft Colors Only
- This is a study guide - people read for hours
- **Use muted/soft color variants** (e.g., `bg-green-50` not `bg-green-500`)
- Avoid bright, saturated colors in content areas
- Dark mode should be comfortable for long reading sessions

### Preferred Box Styling
```html
<!-- Good - Soft background with left border -->
<div class="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 rounded-r-lg">

<!-- Good - Light background with full border -->
<div class="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">

<!-- BAD - Bright gradient (never use in content) -->
<div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
```

---

## Styling & Layout Preferences

### Responsive Design
- **Container width**: `max-w-4xl lg:max-w-6xl` (wider on desktop)
- **Horizontal padding**: `px-4 lg:px-8`
- **Section padding**: `p-6 lg:p-8` for main sections

### Text Sizes
- Regular body text: default
- Small text in tips/examples: `text-sm lg:text-base`
- Extra small text: `text-xs lg:text-sm`
- **Never use small text that stays small on desktop - always scale up with `lg:` breakpoint**

### Dark Mode Support
- All pages must support dark mode
- Text colors: use `dark:text-gray-300` (NOT `dark:text-gray-400` which is too dim)
- Colored text in dark: use brighter variants (e.g., `dark:text-blue-300` not `dark:text-blue-400`)
- Background: `dark:bg-gray-900` for body, `dark:bg-gray-800` for cards

### Color Coding by Topic (Soft Colors)
Use these for **borders and light backgrounds only**:
- **CGL/General Liability**: Green (`border-green-500`, `bg-green-50`)
- **PAP/Personal Auto**: Blue (`border-blue-500`, `bg-blue-50`)
- **Liability Coverage**: Red (`border-red-500`, `bg-red-50`)
- **Workers Compensation**: Amber (`border-amber-500`, `bg-amber-50`)
- **Medical Payments**: Green
- **Physical Damage**: Purple

### Box Styling (Soft Colors)
- Tips/Examples: `bg-[color]-50 dark:bg-[color]-900/30 border-l-4 border-[color]-500`
- Important notes: `bg-amber-50 dark:bg-amber-900/30 border border-amber-200`
- Exam warnings: `bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500`
- Key concepts: Soft background with border (NO gradients)

### Cards & Sections
- Main content cards: `bg-white dark:bg-gray-800 rounded-xl shadow-md`
- Inner boxes: `rounded-lg` with soft colored backgrounds
- Numbered items: Use subtle number circles, not bright colored blocks

---

## Page Structure

### Header (Only Place for Gradients)
- Header can use gradient: `bg-gradient-to-r from-[color]-600 to-[color]-800`
- Breadcrumb navigation
- Title and subtitle

### Navigation
- Sticky nav bar at top
- Links to related parts/sections
- Current section highlighted with solid background (not gradient)

### Content Sections
- Clear headings with `text-2xl font-bold`
- Visual separation between topics
- Tables for data (auto symbols, limits, etc.)
- Grid layouts for comparison (2-3 columns on desktop)
- Use accordions/drawers for long lists with examples

### Footer
- Previous/Next navigation
- Current location indicator

### AI Tutor Button
- Floating button with context-aware help
- Summary of page content for AI context

---

## Formatting Patterns

### Tables
```html
<table class="w-full text-sm lg:text-base">
    <thead>
        <tr class="bg-gray-100 dark:bg-gray-700">
            <th class="text-left p-3 font-bold">...</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b dark:border-gray-600">
            <td class="p-3">...</td>
        </tr>
    </tbody>
</table>
```

### Numbered Lists (Subtle Style)
```html
<div class="flex items-start">
    <span class="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 font-semibold text-sm">1</span>
    <div>Content here...</div>
</div>
```

### Breakdowns/Explanations
```html
<div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
    <p class="text-sm lg:text-base font-semibold text-blue-800 dark:text-blue-200">What does this mean in plain English?</p>
    <p class="text-sm lg:text-base text-gray-700 dark:text-gray-300 mt-1">...</p>
</div>
```

### Covered vs Not Covered Examples
```html
<div class="bg-green-50 dark:bg-green-900/30 p-3 rounded">
    <p class="text-sm font-semibold text-green-700 dark:text-green-300">Example - COVERED:</p>
    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1"><strong>The Setup:</strong> ...</p>
    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1"><strong>What Happens:</strong> ...</p>
    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1"><strong>Who Pays?</strong> ...</p>
</div>
<div class="bg-red-50 dark:bg-red-900/30 p-3 rounded mt-2">
    <p class="text-sm font-semibold text-red-700 dark:text-red-300">Example - NOT COVERED:</p>
    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">...</p>
</div>
```

### Accordion/Collapsible Drawers
Use accordions when you have a list of items that each need detailed examples. This saves space and keeps the page clean. **Only ONE accordion can be open at a time.**

**When to use:**
- Exclusion lists with examples for each
- "Who Is Insured" sections with examples
- Definition lists where each term needs explanation
- Any list where expanding details would make the page too long

**Structure:**
```html
<!-- Container -->
<div class="space-y-2" id="my-accordion">
    <!-- Each accordion item -->
    <div class="accordion-item border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
        <button onclick="toggleAccordion(this)" class="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left">
            <div class="flex items-center">
                <span class="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 font-semibold text-sm">1</span>
                <span class="font-semibold text-gray-800 dark:text-gray-200">Item Title</span>
            </div>
            <svg class="w-5 h-5 text-gray-500 transition-transform accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div class="accordion-content hidden p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600">
            <!-- Content with examples -->
        </div>
    </div>
</div>
```

---

## Folder Structure
```
/casualty/
  /chapter-3/
    index.html (chapter landing with part selection cards)
    /part-0/ (Introduction & Key Terms)
    /part-1/ (CGL)
    /part-2/ (PAP & Business Auto)
      index.html
      pap-liability.html
      pap-medical.html
      pap-um.html
      pap-physical.html
      pap-duties.html
      business-auto.html
      garage-coverage.html
    /part-3/ (Workers Compensation)
    /part-4/ (Professional Liability - future)
```

---

## Key Reminders
1. **NO emojis** - never use them anywhere
2. **NO gradients in content** - only in page headers
3. **Soft, muted colors** - easy on the eyes for long study sessions
4. **Always use larger text on desktop** - the `lg:` breakpoint should increase font sizes
5. **Dark mode must be readable** - test colors in both modes
6. **Every confusing term needs a breakdown** - don't assume knowledge
7. **Examples must be crystal clear** - reader should have NO doubt what's covered/not covered
8. **Use accordions for long lists** - saves space, keeps it clean
9. **Exam alerts are gold** - highlight common misconceptions
10. **Numbers in subtle boxes** - key figures should stand out but not scream

---

## Quality Checklist for New Pages
- [ ] Responsive container (`max-w-4xl lg:max-w-6xl`)
- [ ] Desktop text scaling (`lg:text-base`, `lg:px-8`, etc.)
- [ ] Dark mode tested and readable
- [ ] NO emojis anywhere
- [ ] NO gradients in content (only header)
- [ ] Soft, muted colors throughout
- [ ] Complex terms broken down with examples
- [ ] Examples are crystal clear (The Setup, What Happens, Who Pays)
- [ ] Memory tricks included
- [ ] Exam tips section
- [ ] Accordions used for long lists
- [ ] Navigation working (breadcrumbs, prev/next)
- [ ] AI tutor button with context
