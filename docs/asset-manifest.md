# Asset manifest

The proposal includes twelve AI-generated editorial illustrations, one original horizontal composition per chapter. They were generated with the built-in image_gen tool on 13 October 2026 under the user's request. Their role is conceptual illustration, not evidence of actual SuperPark facilities, visitors, events, staff, posts or product availability. No client-approved photography or portrait was supplied.

The files in `public/assets/visuals/` are responsive WebP deliveries at 640, 1200 and 1672 pixels wide. Original PNGs are preserved in the workspace's `dreamusgroup-visual-originals/` directory. Full prompts are in [visual-prompts.json](visual-prompts.json). All twelve originals were visually inspected after generation.

| Chapter | Asset | Origin / status | Content and caption status |
| --- | --- | --- | --- |
| 01 | [discovery-social-play](../public/assets/visuals/discovery-social-play-1672.webp) | Built-in image_gen; requested by user | Conceptual AI illustration; not venue or visitor evidence |
| 02 | [concept-all-age](../public/assets/visuals/concept-all-age-1672.webp) | Built-in image_gen; requested by user | Conceptual AI illustration; not venue or visitor evidence |
| 03 | [evidence-consumer-signals](../public/assets/visuals/evidence-consumer-signals-1672.webp) | Built-in image_gen; requested by user | Independent survey infographic; S7/S8 definitions and samples remain in HTML |
| 04 | [occasions-organiser](../public/assets/visuals/occasions-organiser-1672.webp) | Built-in image_gen; requested by user | Conceptual AI illustration; not venue or visitor evidence |
| 05 | [benchmark-offer](../public/assets/visuals/benchmark-offer-1672.webp) | Built-in image_gen; requested by user | Conceptual AI illustration; not venue or visitor evidence |
| 06 | [moves-commercial](../public/assets/visuals/moves-commercial-1672.webp) | Built-in image_gen; requested by user | Conceptual AI illustration; not venue or visitor evidence |
| 07 | [activation-play-sessions](../public/assets/visuals/activation-play-sessions-1672.webp) | Built-in image_gen; requested by user | Conceptual AI illustration; not venue or visitor evidence |
| 08 | [subscription-access](../public/assets/visuals/subscription-access-1672.webp) | Built-in image_gen; requested by user | Duration / entitlement; product concepts, not available offers |
| 09 | [tiktok-storyboards](../public/assets/visuals/tiktok-storyboards-1672.webp) | Built-in image_gen; requested by user | Conceptual AI illustration; not venue or visitor evidence |
| 10 | [plan-workflow](../public/assets/visuals/plan-workflow-1672.webp) | Built-in image_gen; requested by user | Work sequence; no fixed dates |
| 11 | [mandate-collaboration](../public/assets/visuals/mandate-collaboration-1672.webp) | Built-in image_gen; requested by user | Collaboration concept; not actual team or Aditya portrait |
| 12 | [closing-first-pilot](../public/assets/visuals/closing-first-pilot-1672.webp) | Built-in image_gen; requested by user | Conceptual AI illustration; not venue or visitor evidence |

## Frontend handling

- Hero loads eagerly at high fetch priority; other images lazy-load with async decoding.
- Every image has intrinsic width/height, descriptive alt text, responsive srcset and sizes. Infographics preserve their full composition.
- Scene thumbnails for the three commercial moves, three activation programmes and five TikTok concepts use WebP crops from their corresponding section illustration. They are not separate factual photographs.
- Storyboard dialogs show one relevant concept image with three readable scene descriptions, CTA and measurement plan.
- Source definitions and model equations remain typed HTML/React content. Regenerate the survey infographic if underlying research facts change.
- No generated photorealistic facility, visitor testimonial, actual employee likeness, venue map or existing-post screenshot is used.

## Other assets

| Asset | Origin / status |
| --- | --- |
| Header mark and favicon | Original proposal mark, not an official brand logo |
| Interface icons | https://lucide.dev/ — ISC-licensed package |
| DM Sans and Manrope | Fontsource; SIL Open Font Licence, self-hosted |
| Aditya portrait | Not supplied; initials mark retained |

Before adding authentic photos, record origin URL, reuse permission, country/venue, approval owner, alt text, caption, dimensions and responsive variants. Singapore photos must be labelled as international references.
