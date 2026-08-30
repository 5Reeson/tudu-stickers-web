# Design QA

## Evidence

- Source visual truth: `/Users/reason/.codex/generated_images/01a00a18-e136-79e2-b257-519636fd3cb0/exec-d6326751-8aa1-4408-b287-1c0286f154c0.png`
- Viewport-proportion reference: `/var/folders/qr/3wqfzbs10txdrjvdglp90s100000gn/T/codex-clipboard-f29d602e-8054-4dce-b565-99fa1fb36cd8.png`
- Cleanup annotation reference: `/var/folders/qr/3wqfzbs10txdrjvdglp90s100000gn/T/codex-clipboard-dd7dcf19-976e-4b23-882e-ba4ff09c7efd.png`
- Desktop implementation: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/home-desktop-1280x720.png`
- Workflow implementation: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/workflow-desktop-1280x720.png`
- Mobile implementation: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/home-mobile-430x932.png`
- Full-view comparison: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/comparison-full.png`
- Focused workflow comparison: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/comparison-workflow.png`
- Cleanup desktop implementation: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/home-desktop-clean-1280x720.png`
- Cleanup workflow implementation: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/workflow-clean-1280x720.png`
- Cleanup focused comparison: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/comparison-cleanup.png`

## Normalization

- Source visual: 1487 × 1058 px. The top region was resized to 1280 px wide and cropped to 1280 × 720 for the full-view comparison.
- Desktop implementation: 1280 × 720 CSS px and 1280 × 720 output px, device scale factor 1.
- Mobile implementation: 430 × 932 CSS px and 430 × 932 output px, device scale factor 1, captured through an isolated responsive iframe because the in-app browser viewport override remained fixed at 1280 × 720.
- The user's MacBook screenshot is 3024 × 1756 px at approximately 2× density. Browser chrome was excluded when estimating its page viewport. The implementation uses a 70dvh Hero target and a 36rem collage cap; at the verified desktop viewport the Hero measured 514.28 / 720 px (71.4%).
- State: light theme, homepage at rest; animations allowed to settle for 900 ms before capture.
- Cleanup pass: 1280 × 720 CSS px and 1280 × 720 output px at device scale factor 1. The annotation reference and revised workflow region were normalized side-by-side to a 2048 × 700 comparison canvas; browser chrome and crop differences were treated as non-design evidence.

## Required Fidelity Surfaces

- Fonts and typography: The existing production headline family, weight, wrapping, and live HTML text are intentionally preserved. The generated brush font from the visual reference was not adopted, per user instruction. Hierarchy and small-copy weights remain legible on desktop and mobile.
- Spacing and layout rhythm: Header, Hero, trust note, and workflow now form one continuous first-screen rhythm. The trust strip is fully visible and the workflow begins within the initial desktop viewport. The workflow is a seven-track desktop grid (four steps plus three arrows) and becomes a single column at 430 px.
- Colors and tokens: Warm ivory graph paper, pale blue-grey grid, charcoal ink, and brand green accents match the selected direction. The revised grid texture is uniform and contains no embedded halftone clusters. Existing yellow, red, and blue character-collage accents are preserved.
- Image quality and asset fidelity: The graph-paper background, blank stationery note, and title doodles are real raster assets. The revised note asset uses a genuine alpha channel, so its torn edge and soft shadow blend directly into the graph paper without an opaque rectangular canvas. Existing product screenshot and character assets retain their source crops and sharpness. Phosphor icons are used for semantic UI icons, with a restrained offset-ink echo rather than custom SVG or CSS illustrations.
- Copy and content: The four workflow titles and descriptions exactly preserve the old copy: 导入、连接、整理、导出 and their original descriptions. The icon meaning matches each preserved step. Trust titles preserve the existing labels and add concise safety explanations from the selected note direction.
- Accessibility and behavior: Semantic headings, links, navigation labels, alt text, focus styles, mobile menu, and reduced-motion handling remain intact. No horizontal overflow was found at 430 px.

## Comparison History

### Pass 1

- [P1] The generated trust-note image participated in layout because stale scoped CSS left it as a static image, expanding the strip to about 591 px.
- Fix: Added stable component-scoped positioning plus a global HMR-safe override so the note is always an absolute background surface.
- Post-fix evidence: Desktop trust strip measures 88 px and sits immediately below the 514.28 px Hero.

- [P2] The initial verification loaded an older cached workflow stylesheet, producing a 2 × 2 layout rather than the requested horizontal four-step rhythm.
- Fix: Verified the fresh production build on a clean local origin. The final computed grid is `268.9px 34px 268.9px 34px 268.9px 34px 268.9px`.
- Post-fix evidence: `workflow-desktop-1280x720.png` shows all four steps in one horizontal row.

### Pass 2

- [P2] The note strip lacked its explanatory safety copy and the workflow icons still read as pristine standard icons.
- Fix: Added small safety descriptions while preserving the existing trust labels, and added a subtle duplicate-ink offset to the same semantic icon set.
- Post-fix evidence: `home-desktop-1280x720.png` shows the completed note hierarchy; `workflow-desktop-1280x720.png` shows the refined icon treatment.

### Final pass

- No actionable P0, P1, or P2 differences remain after applying the user's explicit overrides to the selected reference.
- Desktop navigation to `#workflow` and the 430 px mobile menu were tested.
- Browser console errors checked: none.

### Cleanup pass

- [P1] The safety promise note carried an opaque cream-colored image canvas, creating a visible rectangular mismatch against the graph-paper page background.
- Fix: Replaced it with a new RGBA stationery asset whose area outside the torn paper and shadow is transparent.
- Post-fix evidence: `home-desktop-clean-1280x720.png` and `workflow-clean-1280x720.png` show the grid continuing naturally around the paper edge with no rectangular backdrop.

- [P2] Gray halftone clusters were baked into the top-right and bottom-left corners of the graph-paper raster and appeared at the two annotated workflow corners.
- Fix: Replaced the page texture with a clean graph-paper raster that preserves the paper warmth and grid scale but contains no dot decorations.
- Post-fix evidence: `comparison-cleanup.png` shows both annotated dot clusters removed while the four-step layout, copy, icons, spacing, and green accent remain unchanged.

- Browser console warnings and errors checked after the cleanup: none.

## Follow-up Polish

- [P3] A native 1512 × 792 in-app-browser capture was unavailable because the viewport capability stayed fixed at 1280 × 720. The 14-inch target is covered by the measured 70dvh rule and the fixed 36rem collage cap, but a future physical-device screenshot can provide one last optical check.

## Highlight, CTA, And Interactive Workflow Iteration

### Current Evidence

- Card-style reference: `/var/folders/qr/3wqfzbs10txdrjvdglp90s100000gn/T/codex-clipboard-703d1db7-3eb6-4346-add7-89541c031655.png` (2940 × 1922 px).
- Existing four-step copy and icon reference: `/var/folders/qr/3wqfzbs10txdrjvdglp90s100000gn/T/codex-clipboard-5834b0a3-ccba-4b7b-9cdf-f160f39ec318.png` (2690 × 654 px).
- Green button reference: `/var/folders/qr/3wqfzbs10txdrjvdglp90s100000gn/T/codex-clipboard-c8fcc571-8cb3-4059-9136-429358ed4aae.png` (172 × 116 px).
- Desktop homepage implementation: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/home-1512x900.png` (1497 × 891 px).
- Desktop workflow default: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/workflow-step-1-1512x900.png` (1497 × 891 px).
- Desktop workflow selected state: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/workflow-step-3-1512x900.png` (1497 × 891 px).
- Mobile homepage: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/home-mobile-390x844.png` (375 × 812 px).
- Mobile workflow: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/workflow-mobile-390x844.png` (375 × 812 px).
- Full-view card and CTA comparison: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/comparison-highlights-and-button.png` (3024 × 900 px).
- Focused workflow comparison: `/Users/reason/Desktop/projects/cn-memes-abroad-web/output/design-qa/comparison-workflow.png` (3024 × 900 px).

### Current Normalization

- Desktop viewport override requested 1512 × 900 CSS px. The browser content viewport and screenshot were 1497 × 891 px at device scale factor 1 after scrollbar and browser-surface allocation.
- Mobile viewport override requested 390 × 844 CSS px. The browser content viewport and screenshot were 375 × 812 px at device scale factor 1.
- Reference and implementation images were each fitted into 1512 × 900 frames without stretching, then composited side by side on a 3024 × 900 comparison canvas.
- State: light theme. Homepage at rest, workflow step 01 selected for default comparison, step 03 selected for interaction-state evidence.

### Required Fidelity Surfaces

- Fonts and typography: Existing headline and UI families remain unchanged. The three new highlight titles use the same sans family and weight vocabulary as the rest of the page. Workflow labels preserve the original four titles and descriptions verbatim.
- Spacing and layout rhythm: The Hero measures 576 px in the 900 px desktop view (64%). The new highlight cards begin at 648 px, leaving 252 px of the feature region visible on the initial screen. The workflow is a left preview and right vertical control stack on desktop, and a screenshot-first single column on mobile.
- Colors and visual tokens: The CTA now uses a sampled pale-green direction (`#b8e7a7`) with a 3 px charcoal outline and 6 px solid offset shadow. Highlight and selected-step surfaces reuse this green; the existing ivory graph paper and charcoal ink remain locked.
- Image quality and asset fidelity: The import screenshot is the existing product image. Connection, organization, and export images were generated as 1536 × 1024 raster assets using the import screen as the exact framing and art-direction reference. All four images loaded with a natural width of 1536 px in browser QA.
- Copy and content: Highlight copy matches the requested three title and description pairs. Workflow copy remains exactly: 导入、连接、整理、导出 and the previous four descriptions.
- Accessibility and behavior: The four controls use tab semantics, expose one selected item at a time, support click plus arrow/Home/End keyboard navigation, update the caption and screenshot together, and respect reduced motion. Mobile and desktop showed no horizontal overflow.

### Current Comparison History

- Pass 1: Replaced the flat stationery strip with three offset, rotated highlight cards; converted the former horizontal step row into an interactive left-image/right-controls layout; unified all primary download CTAs to the pale-green outlined style.
- Pass 2: Verified steps 01 and 03 visually, clicked step 03, clicked step 04 on mobile, and moved from step 01 to step 02 with ArrowDown. Each action produced one selected tab and the matching active screenshot/caption.
- Post-fix evidence: `comparison-highlights-and-button.png`, `comparison-workflow.png`, and `workflow-step-3-1512x900.png`.
- Browser console warnings and errors: none.
- Build: Astro check completed with 0 errors, 0 warnings, and 0 hints; static build artifact exists at `dist/index.html`.

### Current Findings

- No actionable P0, P1, or P2 findings remain.
- [P3] The generated workflow screenshots are polished product-direction assets, not final captures from the shipping macOS app. Replace them one-for-one when final product screens are available; component proportions and interaction behavior can remain unchanged.

final result: passed
