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

## Chapter/Part Structure Template

Every chapter part MUST follow this structure in order. This ensures consistency and optimal learning flow.

### 1. Page Header (Required)
```html
<header class="bg-gradient-to-r from-[CHAPTER-COLOR]-600 to-[CHAPTER-COLOR]-800 text-white py-6 shadow-lg">
    <!-- Breadcrumbs: Home / Chapter X / Part Y -->
    <!-- Title: Chapter X Part Y: Topic Name -->
    <!-- Subtitle: Brief description -->
</header>
```

### 2. Sticky Part Navigation (Required)
- Links to all parts in the chapter
- Current part highlighted
- Anchor links to sections within the page

### 3. Overview Section (Required)
- **Purpose**: Orient the reader - what will they learn?
- **Color**: Use chapter's accent color with soft background
- **Include**:
  - Brief intro paragraph explaining the topic
  - "Why This Matters" or "Exam Alert" callout box
  - Key question this section answers

```html
<section class="mb-10">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 class="text-2xl font-bold ...">Overview / Introduction</h2>

        <!-- Intro paragraph -->
        <div class="bg-[color]-50 dark:bg-[color]-900/30 border border-[color]-200 ... p-4 mb-6">
            <p>What this topic is about...</p>
        </div>

        <!-- Exam Alert -->
        <div class="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4">
            <p class="font-bold text-amber-800 dark:text-amber-300">Exam Alert!</p>
            <p>Why this is important for the exam...</p>
        </div>
    </div>
</section>
```

### 4. Main Content Sections (Required)
Each major concept gets its own numbered section. Structure each section as:

#### Section Layout:
```
[Section Number]. [Section Title]
    ├── Definition/Explanation (in colored box)
    ├── Visual Aid (table, diagram, grid, or flow chart)
    ├── Real-World Example (REQUIRED - comprehensive format)
    └── Key Points/Rules (if applicable)
```

#### Example Format (MANDATORY for every concept):
Use the comprehensive "Setup → What Happens → Result" format:

```html
<div class="bg-[color]-50 dark:bg-[color]-900/20 p-4 rounded-lg border-l-4 border-[color]-500">
    <p class="font-semibold text-[color]-800 dark:text-[color]-300 mb-2">Real-World Scenario: [Title]</p>
    <div class="space-y-2 text-sm">
        <p class="text-gray-700 dark:text-gray-300"><strong>The Setup:</strong> [Context and characters]</p>
        <p class="text-gray-700 dark:text-gray-300"><strong>What Happens:</strong> [The event or situation]</p>
        <p class="text-gray-700 dark:text-gray-300"><strong>The Result:</strong> [Outcome, who pays, legal consequence]</p>
    </div>
</div>
```

#### Color Coding for Content Types:
| Content Type | Background | Border | Use For |
|--------------|------------|--------|---------|
| Definitions | `bg-blue-50` | `border-blue-500` | Terms, concepts |
| Coverage/Benefits | `bg-green-50` | `border-green-500` | What's covered, positive outcomes |
| Exclusions/Dangers | `bg-red-50` | `border-red-500` | What's NOT covered, risks |
| Warnings/Alerts | `bg-amber-50` | `border-amber-500` | Exam tips, common mistakes |
| Procedures/Rules | `bg-purple-50` | `border-purple-500` | Steps, requirements, regulations |
| Examples | `bg-gray-50` or `bg-white` | varies | Scenarios, case studies |
| Comparisons | `bg-indigo-50` | `border-indigo-500` | Side-by-side analysis |

### 5. Comparison Section (When Applicable)
If the topic involves comparing items (policy types, coverage options, etc.):

```html
<div class="grid md:grid-cols-2 gap-4">
    <!-- Option A -->
    <div class="bg-[color-a]-50 dark:bg-[color-a]-900/20 rounded-lg p-4 border-l-4 border-[color-a]-500">
        <h4 class="font-bold text-[color-a]-800 dark:text-[color-a]-300 mb-2">[Option A Name]</h4>
        <!-- Details -->
        <div class="bg-white dark:bg-gray-700 p-3 rounded mt-3">
            <p class="text-sm"><strong>Example:</strong> [Specific scenario for Option A]</p>
        </div>
    </div>

    <!-- Option B -->
    <div class="bg-[color-b]-50 dark:bg-[color-b]-900/20 rounded-lg p-4 border-l-4 border-[color-b]-500">
        <h4 class="font-bold text-[color-b]-800 dark:text-[color-b]-300 mb-2">[Option B Name]</h4>
        <!-- Details -->
        <div class="bg-white dark:bg-gray-700 p-3 rounded mt-3">
            <p class="text-sm"><strong>Example:</strong> [Specific scenario for Option B]</p>
        </div>
    </div>
</div>
```

### 6. Key Numbers Section (When Applicable)
If the topic has important numbers, dates, or limits to memorize:

```html
<div class="bg-gradient-to-r from-[color]-50 to-[color2]-50 dark:from-[color]-900/30 dark:to-[color2]-900/30 rounded-xl p-6 border ...">
    <h2 class="text-2xl font-bold ...">Quick Reference: Key Numbers</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
            <p class="text-xl font-bold text-[color]-600 dark:text-[color]-400">$25,000</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">Per person BI</p>
        </div>
        <!-- More number cards -->
    </div>
</div>
```

### 7. Exam Trap Alerts Section (Required)
Every part MUST have an exam tips section highlighting common mistakes:

```html
<div class="bg-red-50 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-700 rounded-xl p-5 lg:p-6">
    <h2 class="text-2xl font-bold text-red-800 dark:text-red-300 mb-4">Exam Trap Alerts</h2>
    <div class="space-y-3">
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <p class="font-bold text-red-700 dark:text-red-300 mb-2">1. [Trap Name]</p>
            <p class="text-gray-700 dark:text-gray-300 text-sm">[Explanation of what confuses people and the correct answer]</p>
        </div>
        <!-- More traps -->
    </div>
</div>
```

### 8. Quick Reference Summary (Required)
End with a visual summary of the entire part:

```html
<div class="bg-gradient-to-r from-[chapter-color]-600 to-[chapter-color]-800 rounded-xl p-6 text-white">
    <h2 class="text-2xl font-bold mb-6">Quick Reference Summary</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white/20 rounded-lg p-4">
            <p class="font-bold">[Term/Concept]</p>
            <p class="text-sm text-[color]-100">[One-line definition]</p>
        </div>
        <!-- More summary cards -->
    </div>
</div>
```

### 9. Footer Navigation (Required)
```html
<footer class="bg-gray-800 dark:bg-gray-950 text-white py-6">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
            <a href="[prev-part]">← Part X: [Name]</a>
            <span class="text-gray-400">Part Y of Z</span>
            <a href="[next-part]">Part Z: [Name] →</a>
        </div>
    </div>
</footer>
```

### 10. AI Tutor Button (Required)
Floating button with context-aware help. The AI context should include:
- Topic name
- Key concepts covered
- Important numbers
- Common confusions

---

## Example Requirements by Chapter Type

### Coverage Chapters (Ch 1-3)
- Every coverage type needs: Definition → What's Covered → What's Excluded → Example
- Use COVERED vs NOT COVERED grids for exclusions
- Include claim scenarios showing payment calculations

### Law/Regulation Chapters (Ch 4-5)
- Every rule needs: Rule → Plain English Explanation → Violation Example → Consequence
- Each prohibited practice needs a "What this looks like" scenario
- Include Commissioner powers with real-world examples
- License types need comparison scenarios

### All Chapters Must Have:
1. At least 1 comprehensive example per major concept (Setup → What Happens → Result)
2. At least 1 comparison grid or table
3. Key numbers in highlighted boxes
4. Exam trap alerts section
5. Quick reference summary

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
