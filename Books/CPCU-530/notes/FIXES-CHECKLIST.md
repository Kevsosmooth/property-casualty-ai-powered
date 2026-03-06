# CPCU 530 Notes - Fixes & Website Build Checklist

## Phase 1: Priority Note Fixes -- COMPLETE

### Critical Fixes
- [x] **Assignment 4**: Add [2026 UPDATE NEEDED] flags (electronic contracts, COVID impossibility, UCC modernization)
- [x] **Assignment 5**: Add [2026 UPDATE NEEDED] flags (parametric insurance, cyber insurance, bad faith trends, telematics/UBI)
- [x] **Assignment 6**: Fix risk of loss contradiction (Quick-Reference says "follows title" but body correctly says UCC separates them)
- [x] **Assignment 14**: Expand LLC section + fix typo "unchallenageable"

### Important Fixes
- [x] **Assignment 3**: Add more examples (duress, undue influence, promissory estoppel)
- [x] **Assignment 7**: Add [2026 UPDATE NEEDED] flags for mortgage/foreclosure + community property to body text
- [x] **Assignment 10**: Expand survival/wrongful death sections + animal liability + Good Samaritan
- [x] **Assignment 11**: Add header-level [2026 UPDATE NEEDED] flag
- [x] **Assignment 15**: Add header-level flag, expand accounting section, add FCPA + Patriot Act examples

### Minor Fixes
- [x] **Assignment 9**: Add examples for interference with copyright/patent, unfair competition, trespass
- [x] **Assignment 12**: Expand "Defenses to Liability" section, add surplus lines [2026 UPDATE] flag, add E&O example
- [x] **Assignment 13**: Expand Rehabilitation Act, military service (USERRA), wage garnishment sections
- [x] **Assignment 1**: Add insurance-specific Commerce Clause example, ADR insurance example
- [x] **Assignment 2**: Add option contract example, UCC Battle of Forms scenario

### Missing Notes
- [x] **Assignment 8**: Created from scratch (934 lines - Tort Law: Negligence)

---

## Phase 2: Build CPCU 530 HTML Website -- IN PROGRESS

### Structure (per Books/CPCU-STUDY-GUIDE.md)
```
cpcu/530/
├── index.html                    # CPCU 530 course overview (lists all 15 assignments)
├── assignment-1/
│   ├── index.html                # Assignment 1 chapter index (lists parts)
│   ├── part-1/index.html         # Content page
│   ├── part-2/index.html
│   └── recap/index.html
├── assignment-2/ ... assignment-15/
│   └── [same structure]
```

### Website Build Steps
- [ ] Update cpcu/index.html to add CPCU 530 card (if not already there)
- [ ] Create cpcu/530/index.html (course overview listing all 15 assignments)
- [ ] Build Assignment 1 pages (split into parts per 15-20 min rule)
- [ ] Build Assignment 2 pages
- [ ] Build Assignment 3 pages
- [ ] Build Assignment 4 pages
- [ ] Build Assignment 5 pages
- [ ] Build Assignment 6 pages
- [ ] Build Assignment 7 pages
- [ ] Build Assignment 8 pages
- [ ] Build Assignment 9 pages
- [ ] Build Assignment 10 pages
- [ ] Build Assignment 11 pages
- [ ] Build Assignment 12 pages
- [ ] Build Assignment 13 pages
- [ ] Build Assignment 14 pages
- [ ] Build Assignment 15 pages

### Templates to Follow
- Section landing: casualty/index.html or life-health/index.html
- Chapter/Assignment index: casualty/chapter-2/index.html
- Content page: casualty/chapter-2/part-1/index.html
- Color scheme: Purple (`from-purple-600 to-purple-800`, `border-purple-500`)

### Per-Assignment Website Rules
- Split each assignment into digestible parts (one major topic per part, 15-20 min read)
- Every part needs: Header, Sticky Nav, Overview, Main Content, Comparisons, Key Numbers, Exam Traps, Cheat Sheet, Quick Reference, Footer Nav, AI Tutor Button
- Follow CLAUDE.md for all visual/layout rules
- No emojis, no gradients in content, soft colors, wide layouts

---

## Progress Log
- 2026-03-06: Created this checklist
- 2026-03-06: Assignment 8 notes created (934 lines)
- 2026-03-06: Quality check complete on all 14 existing notes
- 2026-03-06: All Critical and Important fixes applied
- 2026-03-07: All Minor fixes applied -- Phase 1 COMPLETE
- 2026-03-07: Starting Phase 2 -- HTML website build
