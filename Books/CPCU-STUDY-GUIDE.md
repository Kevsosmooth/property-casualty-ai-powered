# CPCU Exam Study Guide - Master Reference

## What This Is
This is the master checklist and reference for breaking down CPCU textbooks into markdown study notes AND building the interactive HTML study guide website. Each book gets its own folder under `Books/`, chapters become markdown notes, and then get converted into HTML pages on the website.

---

## Phase 1: Book Breakdown (Markdown Notes)

### Folder Structure
```
Books/
  CPCU-500/                          <-- Foundations of Risk Management
    [textbook PDF]
    notes/
      ch1-intro-risk-management/     <-- Chapter notes (folder-per-chapter style)
      ...
  CPCU-520/                          <-- Insurance Operations
    [textbook PDF]
    notes/
      assignment-01-overview-of-insurance-operations.md
      assignment-02-insurance-regulation.md
      ...
      VERIFICATION-REPORT-ASSIGNMENTS-1-5.md   <-- Accuracy check
      VERIFICATION-REPORT-ASSIGNMENTS-6-10.md  <-- Accuracy check
  CPCU-530/                          <-- Legal Environment of Insurance
    [textbook PDF]
    notes/                           <-- To be created
```

### Note Format (per chapter/assignment)
Each markdown file contains:
1. **Title** - Assignment/chapter number and name
2. **Educational Objectives** - From the chapter opening
3. **Section-by-Section Breakdown** - Key concepts in bold, definitions, real-world examples, important terms, key numbers/formulas
4. **Key Terms Glossary** - All important definitions
5. **Exam Tips** - Likely test points, common traps, what to memorize
6. **Quick-Reference Summary** - Condensed review
7. **[2026 UPDATE NEEDED]** flags - Outdated content from older editions

### How to Generate Notes for a New Book
1. Put the PDF in its `Books/CPCU-XXX/` folder
2. Tell Claude: "Break down the CPCU-XXX book in Books/CPCU-XXX/ into markdown study notes. See Books/CPCU-STUDY-GUIDE.md for format and process."
3. Claude will:
   - Read the table of contents to identify chapters/assignments
   - Launch parallel agents (one per chapter) to read and create notes
   - Each agent reads the PDF pages, extracts key content, and writes a markdown file
   - Files go into `Books/CPCU-XXX/notes/`
4. Launch verification agents to check accuracy and flag outdated content
5. Review the notes and verification reports

### Permissions Note
Background agents need write access. The project settings file at:
`~/.claude/projects/-volume1-personal-notes-Property-Casualty-Notes/settings.json`
already has auto-allow for Write to the entire Property-Casualty-Notes directory.

---

## Phase 2: Website Build (HTML Study Guide)

### How the Existing Website Works

The site lives at the root of `/volume1/personal/notes/Property-Casualty-Notes/`. It uses:
- **Tailwind CSS** via CDN (no build step needed)
- **Dark mode** toggle (stored in localStorage)
- **AI Tutor** button on content pages (Google Gemini 2.5 Flash via `js/ai-helper.js`)
- **No emojis** anywhere (use text labels, SVG icons, or numbered circles)
- **No gradients in content** (gradients ONLY in page headers)
- **Soft colors** for long study sessions - no bright/harsh backgrounds

### Existing Site Structure
```
/volume1/personal/notes/Property-Casualty-Notes/
├── index.html                    # Main landing / course selector
├── css/styles.css                # Shared styles + AI modal
├── js/ai-helper.js               # AI tutor (Gemini API)
├── casualty/                     # P&C Casualty section
│   ├── index.html                # Section landing page
│   ├── chapter-1/ to chapter-5/
│   │   ├── index.html            # Chapter overview (lists all parts)
│   │   ├── part-1/ to part-N/
│   │   │   └── index.html        # Content page (the actual study material)
│   │   └── recap/
│   │       └── index.html
├── property/                     # Property section (similar structure)
├── life-health/                  # Life & Health section
│   ├── index.html                # Course selector (Health vs Life)
│   └── health/
│       ├── index.html            # Health section landing
│       └── chapter-1/ to chapter-2/
├── study-tools/
│   ├── flashcards.html
│   └── quiz.html
```

### Navigation Hierarchy (4 levels)
```
Level 1: index.html (Course Selector - P&C, Life & Health, CPCU)
  └── Level 2: cpcu/index.html (CPCU Landing - shows all courses: 500, 520, 530, 540)
      └── Level 3: cpcu/520/index.html (Course overview - shows all 10 assignments)
          └── Level 4: cpcu/520/assignment-1/part-1/index.html (Content pages)
```

### CPCU Section to Create
```
cpcu/
├── index.html                         # CPCU Landing page (course selector for 500/520/530/540)
├── 520/
│   ├── index.html                     # CPCU 520 overview (lists all 10 assignments)
│   ├── assignment-1/
│   │   ├── index.html                 # Assignment 1 chapter index (lists parts)
│   │   ├── part-1/
│   │   │   └── index.html             # Content page
│   │   ├── part-2/
│   │   │   └── index.html
│   │   └── recap/
│   │       └── index.html
│   ├── assignment-2/ ... assignment-10/
│   │   └── [same structure]
│   └── study-tools/                   # CPCU 520 specific tools (optional)
├── 500/                               # Future
├── 530/                               # Future
└── 540/                               # Future
```

### Color Scheme for CPCU Section
CPCU gets its own distinct color theme to separate it from P&C and Life & Health:

**CPCU Main**: Dark blue/navy (matches the CPCU book cover)
- Landing page gradient: `from-blue-800 to-indigo-900`
- Accent: `border-indigo-500`

**Per-Course Colors** (within CPCU):
- CPCU 500 (Foundations): Blue - `from-blue-600 to-blue-800`
- CPCU 520 (Operations): Indigo - `from-indigo-600 to-indigo-800`
- CPCU 530 (Legal): Purple - `from-purple-600 to-purple-800`
- CPCU 540 (Finance): Emerald - `from-emerald-600 to-emerald-800`

**Per-Assignment Colors** (within CPCU 520):
- Assignment 1 (Overview): Blue
- Assignment 2 (Regulation): Purple
- Assignment 3 (Marketing): Green
- Assignment 4 (Underwriting): Amber
- Assignment 5 (Risk Control): Teal
- Assignment 6 (Claims): Red
- Assignment 7 (Actuarial): Indigo
- Assignment 8 (Reinsurance): Cyan
- Assignment 9 (IT): Slate
- Assignment 10 (Strategy): Rose

### Content Rules for CPCU Pages (CRITICAL)

The CPCU content is HARDER than P&C licensing. These rules are non-negotiable:

1. **Break down hard words** - Every technical term must be explained in plain English the FIRST time it appears. Don't assume the reader knows jargon.
   ```
   BAD:  "The ceding commission offsets acquisition costs."
   GOOD: "The ceding commission (a fee the reinsurer pays back to the primary insurer)
          helps cover the costs of getting the policy in the first place - things like
          agent commissions and paperwork."
   ```

2. **Examples for EVERYTHING** - No concept goes unexplained. Use the "Setup → What Happens → Result" format.
   ```
   The Setup: ABC Insurance writes a $2 million policy for a factory.
   What Happens: A fire destroys the factory, causing $1.5 million in damage.
   The Result: ABC pays the claim, but thanks to their reinsurance treaty,
   they only pay $500K and the reinsurer covers the other $1 million.
   ```

3. **Numbers need context** - Never throw numbers without explaining what they mean and WHY they matter.
   ```
   BAD:  "The combined ratio is 105%."
   GOOD: "The combined ratio is 105%. That means for every $1 the insurer collected
          in premiums, they spent $1.05 on claims and expenses. They're LOSING money
          on underwriting. The only way they survive is if their investments make up
          the difference."
   ```

4. **Formulas get walked through step by step** - Show the formula, explain each part, then do a worked example.
   ```
   Loss Ratio = Incurred Losses / Earned Premiums

   Let's break this down:
   - Incurred Losses = what the insurer paid (or expects to pay) in claims
   - Earned Premiums = the portion of premiums the insurer has "earned" by
     providing coverage (not the full amount collected upfront)

   Example: If claims cost $650,000 and earned premiums were $1,000,000:
   Loss Ratio = $650,000 / $1,000,000 = 0.65 = 65%

   What this means: 65 cents of every premium dollar went to paying claims.
   That leaves 35 cents for expenses and profit. Is that good? For most lines, yes.
   ```

5. **Comparison boxes** - When two things are similar but different, put them side by side.

6. **"Why Should I Care?" callouts** - For dry/abstract concepts, add a box explaining why this matters in the real world and on the exam.

7. **Progressive complexity** - Start simple, build up. Don't front-load complexity.

8. **One major topic per part** - If a chapter assignment covers 6 big topics, that's potentially 3-6 parts. Don't cram everything into one page. Follow the 15-20 minute study rule from CLAUDE.md.

### How to Build Website Pages from Notes

1. Read the markdown notes file for the assignment
2. Read the verification report for accuracy updates
3. Split the assignment into digestible parts (one major topic per part, 15-20 min read each)
4. For each part, create an HTML page following the template in CLAUDE.md
5. Create the assignment index page listing all parts
6. Create the course index page (cpcu/520/index.html) listing all assignments
7. Create the CPCU landing page (cpcu/index.html) with course cards
8. Update the main index.html to add CPCU as a course option

### Template Reference Files
Use these existing pages as HTML templates:
- **Section landing**: `casualty/index.html` or `life-health/index.html`
- **Chapter/Assignment index**: `casualty/chapter-2/index.html`
- **Content page**: `casualty/chapter-2/part-1/index.html`
- **Course selector update**: `index.html` (add CPCU card)

### Quick Command for Website Build
```
"Build the CPCU 520 website section. Use the markdown notes in Books/CPCU-520/notes/
and the verification reports. Follow Books/CPCU-STUDY-GUIDE.md for structure,
color scheme, and content rules. Use existing HTML pages as templates."
```

---

## CPCU Exam Overview

The CPCU designation requires completing **7 courses** (4 foundation + 3 concentration/elective).

### Foundation Courses (Required)
| Course | Title | Book Status | Notes Status | Website Status |
|--------|-------|-------------|--------------|----------------|
| CPCU 500 | Foundations of Risk Management | Have PDF (2016) | Folders created, empty | Not started |
| CPCU 520 | Insurance Operations | Have PDF (2018) | COMPLETE (10 assignments) | Phase 2 next |
| CPCU 530 | Legal Environment of Insurance | Have PDF (2021) | Not started | Not started |
| CPCU 540 | Finance and Accounting | No PDF yet | Not started | Not started |

### Concentration Courses (Pick a track + elective)
TBD based on chosen concentration (Commercial or Personal lines)

---

## CPCU 500 - Foundations of Risk Management and Insurance
**Book**: 2016 Edition (older - will need many update flags)
**Chapters**: 8

| Ch | Topic | Notes Status | Website Status |
|----|-------|-------------|----------------|
| 1 | Introduction to Risk Management | DONE | DONE |
| 2 | Risk Assessment | DONE | DONE |
| 3 | Risk Control | DONE | DONE |
| 4 | Risk Financing | DONE | DONE |
| 5 | Insurance as Risk Management Technique | DONE | DONE |
| 6 | Insurance Policy Analysis | DONE | DONE |
| 7 | Common Policy Concepts | DONE | DONE |
| 8 | Big Data and Analytics | DONE | DONE |

**Notes Status**: All 8 chapter notes COMPLETE (March 2026).
**Website Status**: All 8 chapter pages COMPLETE (March 2026). Course index, CPCU landing page, and main index updated.

---

## CPCU 520 - Insurance Operations
**Book**: 3rd Edition, 2018
**Assignments**: 10

| # | Topic | PDF Pages | Notes | Verified | Website |
|---|-------|-----------|-------|----------|---------|
| 1 | Overview of Insurance Operations | 19-52 | DONE | Pending | Not started |
| 2 | Insurance Regulation | 49-82 | DONE | Pending | Not started |
| 3 | Insurance Marketing and Distribution | 83-120 | DONE | Pending | Not started |
| 4 | The Underwriting Function | 121-154 | DONE | Pending | Not started |
| 5 | Risk Control and Premium Auditing | 155-186 | DONE | Pending | Not started |
| 6 | The Claims Function | 187-230 | DONE | Pending | Not started |
| 7 | Actuarial Operations | 231-266 | DONE | Pending | Not started |
| 8 | Reinsurance Principles and Concepts | 267-296 | DONE | Pending | Not started |
| 9 | Business Needs and IT Alignment | 297-328 | DONE | Pending | Not started |
| 10 | Insurer Strategic Management | 329-358 | DONE | Pending | Not started |

**Reddit Intel on CPCU 520**:
- Considered moderate difficulty (easier than 530/540)
- Has overlap with CPCU 540 - study them back-to-back
- Practice quizzes from The Institutes have similar/identical questions to actual exam
- Recommended study resources: Institutes practice tests, Burnham System, BigDaddyU, Certdemy, SmartQuizMe app
- Exam is virtually proctored (take at home), can use calculator and scratch paper

---

## CPCU 530 - Legal Environment of Insurance
**Book**: 2nd Edition, 2021 (newest book - fewer update flags needed)
**Chapters**: TBD (need to read table of contents)

| # | Topic | Notes Status | Website Status |
|---|-------|-------------|----------------|
| ? | TBD | Not started | Not started |

**Next Step**: Read PDF table of contents, then run agents to create notes.

---

## CPCU 540 - Finance and Accounting for Insurance
**Book**: Not yet acquired
**Status**: Need to obtain PDF

**Reddit warns**: This is one of the HARDEST CPCU exams along with 530. Plan extra study time.

---

## Difficulty Ranking (from Reddit)
1. **CPCU 530** (Legal) - Hardest, lots of legal concepts, unrelated to other courses
2. **CPCU 540** (Finance) - Very hard, but "clicks" once you get it
3. **CPCU 520** (Operations) - Moderate, broad but manageable
4. **CPCU 500** (Foundations) - Moderate
5. **CPCU 550** (Elective) - Easier side

---

## Quick Command Reference

**To break down a new book**:
```
"Break down the CPCU-XXX book in Books/CPCU-XXX/ into markdown study notes,
using parallel agents. See Books/CPCU-STUDY-GUIDE.md for the format and process."
```

**To verify notes accuracy**:
```
"Verify the CPCU-XXX notes for accuracy and outdated content.
See Books/CPCU-STUDY-GUIDE.md for verification format."
```

**To build website pages**:
```
"Build the CPCU 520 website section. Use the markdown notes in Books/CPCU-520/notes/
and the verification reports. Follow Books/CPCU-STUDY-GUIDE.md for structure,
color scheme, and content rules. Use existing HTML pages as templates."
```

**To update an existing chapter's notes**:
```
"Update the notes for CPCU-520 Assignment 3 - re-read the PDF pages and
improve the markdown. See Books/CPCU-STUDY-GUIDE.md for format."
```

**To check progress**:
```
"Check the status of CPCU study notes - see Books/CPCU-STUDY-GUIDE.md"
```

**After completing any step, update this file's checklists!**
