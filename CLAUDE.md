# Property & Casualty Insurance Study Guide - Claude Code Guidelines

## Project Overview
This is an interactive study guide for Property & Casualty Insurance licensing exams. The goal is to make complex insurance concepts **easy to learn, fun to study, and actually retainable**.

---

## Core Principles

### 1. Make Learning Fun & Engaging
- Use visual diagrams, flowcharts, and comparison tables
- Include memory tricks and mnemonics
- Break up walls of text with colorful boxes
- Add "Exam Trap" callouts for common mistakes

### 2. Crystal Clear Readability
- **Large, readable text** - users may wear glasses
- **Wide layouts on desktop** - use the full screen
- **High contrast in dark mode** - no dim gray text
- **Generous spacing** - don't cram content

### 3. Examples Are Everything
- **Every concept needs at least one real-world example** - NO exceptions
- Use "COVERED vs NOT COVERED" pairs for exclusions
- Format examples with: "The Setup", "What Happens", "Who Pays?"
- Examples must leave ZERO doubt

### 4. Regulation/Law Chapters Need EXTRA Examples
- **Chapters 4 & 5 (NJ Laws)** are dense with legal terms - they REQUIRE more examples than coverage chapters
- Each prohibited practice needs a "What this looks like in real life" example
- Abstract legal concepts (misrepresentation, rebating, twisting) MUST have concrete scenarios
- If a bullet point lists violations, each violation needs its own mini-example
- Format for prohibited practices:
  ```
  Violation Name
  What it means: [plain English definition]
  Example: [Specific scenario like "Agent says X to customer, but actually Y"]
  ```
- When in doubt, add MORE examples - these chapters are hard to understand without them

---

## CRITICAL: Layout & Readability Rules

### Wide Desktop Layouts (REQUIRED)
```html
<!-- CORRECT - Uses full width on desktop -->
<main class="container mx-auto px-4 lg:px-8 py-8 max-w-5xl lg:max-w-7xl">

<!-- WRONG - Too narrow, wastes screen space -->
<main class="container mx-auto px-4 py-8 max-w-4xl">
```

**Container widths:**
- `max-w-5xl lg:max-w-7xl` for main content (PREFERRED)
- `lg:px-8` for more breathing room on desktop
- Never use `max-w-4xl` alone without `lg:` expansion

### Text Sizes (Accessibility First)
```html
<!-- Body text - readable base size -->
<p class="text-base lg:text-lg text-gray-700 dark:text-gray-300">

<!-- Example/tip text - NEVER stay small on desktop -->
<p class="text-sm lg:text-base text-gray-600 dark:text-gray-400">

<!-- Labels/captions -->
<p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
```

**Rules:**
- Base body text: `text-base lg:text-lg`
- Small text: `text-sm lg:text-base` (scales up on desktop)
- Never use `text-xs` without `lg:text-sm`
- Bold important terms: `<strong>` for emphasis

### Grid Layouts for Visual Content
```html
<!-- 2-3 columns for comparisons -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

<!-- Side-by-side on large screens -->
<div class="grid lg:grid-cols-2 gap-6">
```

---

## Visual Style Rules

### NO Emojis
- **Never use emojis anywhere**
- Use text labels, SVG icons, or numbered circles instead

### NO Gradients in Content
- Gradients ONLY allowed in page headers
- All content boxes use solid, soft colors

### Soft Colors for Long Study Sessions
```html
<!-- GOOD - Soft background with left border -->
<div class="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 lg:p-5 rounded-r-lg">

<!-- GOOD - Light background with full border -->
<div class="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 lg:p-5">

<!-- BAD - Too bright, hurts eyes -->
<div class="bg-green-500 text-white">
```

### Dark Mode (MUST be readable)
- Body text: `dark:text-gray-300` (NOT gray-400/500)
- Colored text: Use light variants (`dark:text-blue-300` not `dark:text-blue-400`)
- Backgrounds: `dark:bg-gray-900` body, `dark:bg-gray-800` cards
- Borders: `dark:border-gray-700` or colored `dark:border-[color]-800`

---

## Color Scheme by Chapter

| Chapter | Theme Color | Header Gradient | Accent |
|---------|-------------|-----------------|--------|
| Ch 1: Terms | Blue | `from-blue-600 to-blue-800` | `border-blue-500` |
| Ch 2: Provisions | Purple | `from-purple-600 to-purple-800` | `border-purple-500` |
| Ch 3: Policies | Green | `from-green-600 to-green-800` | `border-green-500` |
| Ch 4: NJ Laws | Purple | `from-purple-600 to-purple-800` | `border-purple-500` |
| Ch 5: NJ Casualty | Red | `from-red-600 to-red-800` | `border-red-500` |

### Topic Color Coding (within pages)
- **Liability/Danger**: Red borders/backgrounds
- **Coverage/Benefits**: Green borders/backgrounds
- **Information/Neutral**: Blue borders/backgrounds
- **Warnings/Important**: Amber borders/backgrounds
- **Definitions/Terms**: Purple borders/backgrounds

---

## Visual Elements (REQUIRED for learning)

### Comparison Tables
```html
<div class="overflow-x-auto">
    <table class="w-full text-sm lg:text-base">
        <thead>
            <tr class="bg-purple-600 text-white">
                <th class="p-3 lg:p-4 text-left rounded-tl-lg">Column 1</th>
                <th class="p-3 lg:p-4 text-left rounded-tr-lg">Column 2</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="bg-gray-50 dark:bg-gray-700">
                <td class="p-3 lg:p-4">Content</td>
            </tr>
        </tbody>
    </table>
</div>
```

### Key Numbers Box (for memorization)
```html
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
    <div class="bg-white dark:bg-gray-800 p-3 lg:p-4 rounded-lg text-center border">
        <p class="text-2xl lg:text-3xl font-bold text-red-600 dark:text-red-400">30</p>
        <p class="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Days to notify</p>
    </div>
</div>
```

### Visual Flow Diagrams
```html
<div class="flex items-center gap-4 flex-wrap">
    <div class="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg text-center">
        <p class="font-bold">Step 1</p>
    </div>
    <div class="text-2xl text-gray-400">→</div>
    <div class="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg text-center">
        <p class="font-bold">Step 2</p>
    </div>
</div>
```

### Exam Trap Alerts
```html
<div class="bg-red-50 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-700 rounded-xl p-5 lg:p-6">
    <h3 class="text-xl lg:text-2xl font-bold text-red-800 dark:text-red-300 mb-4">Exam Trap Alerts</h3>
    <div class="space-y-3">
        <div class="flex items-start">
            <span class="text-red-500 mr-3 text-xl">!</span>
            <p class="text-gray-700 dark:text-gray-300 text-base lg:text-lg">Important trap here</p>
        </div>
    </div>
</div>
```

---

## Page Structure

### Required Components
1. **Header** - Gradient with breadcrumbs, title, subtitle
2. **Sticky Navigation** - Part/section links
3. **Main Content** - Wide container with visual sections
4. **Quick Reference** - Summary table/cards at bottom
5. **Exam Tips** - Common traps and memorization help
6. **Footer Navigation** - Prev/Next links
7. **AI Tutor Button** - Floating help with context

### Content Section Pattern
```html
<section class="mb-8 lg:mb-10">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 lg:p-6">
        <h2 class="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Section Title</h2>
        <!-- Content with visual boxes, tables, diagrams -->
    </div>
</section>
```

---

## Folder Structure

```
/casualty/
  index.html              (Casualty landing page)
  /chapter-1/             (Insurance Terms)
  /chapter-2/             (Policy Provisions)
  /chapter-3/             (Types of Policies)
    index.html
    /part-0/ to /part-7/
    /recap/
  /chapter-4/             (NJ Laws - All Lines)
    index.html            (Introduction + definitions)
    /part-1/              (Types of Insurers, Producers, Transactions)
    /part-2/              (State Regulation, Commissioner)
    /part-3/              (Licensing)
    /part-4/ to /part-10/
    /recap/
  /chapter-5/             (NJ Casualty-Specific)
/property/                (Future - Property Insurance)
/study-tools/
  flashcards.html
  quiz.html
```

---

## Quality Checklist

### Layout & Readability
- [ ] Wide container: `max-w-5xl lg:max-w-7xl`
- [ ] Desktop padding: `px-4 lg:px-8`
- [ ] Body text: `text-base lg:text-lg`
- [ ] Small text scales up: `text-sm lg:text-base`
- [ ] Grid layouts for comparisons

### Visual Learning
- [ ] Key numbers in highlighted boxes
- [ ] Comparison tables with headers
- [ ] Flow diagrams for processes
- [ ] Color-coded sections by topic
- [ ] Memory tricks included

### Accessibility
- [ ] Dark mode tested and readable
- [ ] High contrast text colors
- [ ] No tiny text that stays tiny
- [ ] Generous padding/spacing

### Content Quality
- [ ] NO emojis anywhere
- [ ] NO gradients in content areas
- [ ] Every term has an example
- [ ] "Exam Trap" section included
- [ ] Quick reference summary

### Navigation
- [ ] Breadcrumb trail
- [ ] Sticky part navigation
- [ ] Prev/Next footer links
- [ ] AI tutor button with context

---

## Common Patterns

### Definitions with Examples
```html
<div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 lg:p-5 border-l-4 border-blue-500">
    <h3 class="font-bold text-blue-800 dark:text-blue-300 text-lg lg:text-xl">Term Name</h3>
    <p class="text-gray-700 dark:text-gray-300 mt-2 text-base lg:text-lg">Definition here.</p>
    <div class="bg-white dark:bg-gray-700 p-3 lg:p-4 rounded mt-3">
        <p class="font-semibold text-gray-700 dark:text-gray-300">Example:</p>
        <p class="text-gray-600 dark:text-gray-400 text-sm lg:text-base mt-1">Real-world example...</p>
    </div>
</div>
```

### Covered vs Not Covered
```html
<div class="grid md:grid-cols-2 gap-4">
    <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <p class="font-bold text-green-800 dark:text-green-300">COVERED</p>
        <p class="text-gray-700 dark:text-gray-300 mt-2">Scenario description...</p>
    </div>
    <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <p class="font-bold text-red-800 dark:text-red-300">NOT COVERED</p>
        <p class="text-gray-700 dark:text-gray-300 mt-2">Scenario description...</p>
    </div>
</div>
```

---

## Key Reminders

1. **Wide layouts** - Use the full screen on desktop
2. **Large text** - Users wear glasses, make it readable
3. **Visual first** - Tables, diagrams, color boxes
4. **NO emojis** - Ever
5. **Soft colors** - Easy on eyes for long study sessions
6. **Dark mode matters** - Test every page
7. **Examples are essential** - One per concept minimum
8. **Exam traps** - Highlight what trips people up
9. **Numbers stand out** - Key figures in boxes
10. **Make it fun** - Learning should be enjoyable
