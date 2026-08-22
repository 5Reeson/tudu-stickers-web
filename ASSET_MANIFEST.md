# Asset Manifest

## Current project assets

| Asset | Path | Status | Notes |
| --- | --- | --- | --- |
| Desktop design draft | `exec-c46ab3d0-e90b-4765-b1ec-731ce4ed67a1.png` | Reference only | Never rendered as the website background. |
| Mobile design draft | `mobile-home-430x932@2x.png` | Reference only | Used to verify the 430 x 932 composition. |
| Orange mascot sticker | `src/assets/characters/lulu-temporary.png` | Temporary original art | Transparent generated development asset. Replace or clear for production rights. |
| Paired cats sticker | `src/assets/characters/peach-cats-temporary.png` | Temporary original art | Transparent generated development asset. Replace or clear for production rights. |
| Golden dog sticker | `src/assets/characters/dog-temporary.png` | Temporary original art | Transparent generated development asset. Replace or clear for production rights. |
| Black and white cow sticker | `src/assets/characters/grass-cow-temporary.png` | Temporary original art | Transparent generated development asset. Replace or clear for production rights. |
| Import screen | `src/assets/app-screenshots/import-step-temporary.png` | Temporary visual placeholder | Must be replaced by a real Retina capture from the Electron app before launch. |
| Favicon | `public/favicon.svg` | Development ready | Text-based placeholder mark. Replace when the final logo is approved. |
| Open Graph image | `public/og/home-temporary.png` | Temporary | Uses the approved desktop design draft as a social preview only. |

## Required before public launch

1. Replace the temporary import screen with a real 2x PNG or lossless WebP capture from the signed Electron build.
2. Confirm that every character asset is original or licensed for public commercial use.
3. Replace the text favicon with the final brand mark and export an Apple Touch Icon.
4. Produce a final 1200 x 630 Open Graph image with approved brand artwork.
5. Replace the placeholder canonical domain in `astro.config.mjs` and `public/robots.txt`.
6. Add the signed DMG outside the Git repository, preferably in R2, only after release details are real.

## Image generation record

The five temporary hero assets were created with the built-in image generation workflow using the desktop and mobile drafts as style and composition references. Character prompts requested original sticker interpretations, thick black outlines, paper texture, a white die-cut edge, and genuine alpha transparency. The app prompt requested a temporary isolated dark macOS window and explicitly marks it for replacement by a real product capture.
