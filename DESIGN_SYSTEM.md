# Design system — RED / BLACK, Edition 01

## Reference and interpretation

The visual inspiration is DG Cinema (https://www.dg-cinema.com/en), specifically its editorial composition, forceful headlines, dark canvas, controlled red accents and whitespace. This portfolio is **not** a clone: layouts, graphic motifs, copy, icons and brand are separately authored for a software engineer.

## Palette

| Token | Color | Usage |
|---|---|---|
| Canvas | `#09090B` | Main background |
| Dark surface | `#101013` | Cards and panels |
| Raised surface | `#151518` | Selected / interactive surface |
| Text | `#F5F5F5` | Headings and important text |
| Secondary | `#96969E` | Context and metadata |
| Brand red | `#E50914` | Rare accent, dots, borders, emphasis |
| Bright red | `#FF3340` | Hover and small labels |
| Border | `#313136` | Subtle dividers and card boundaries |

Keep most pixels black or neutral. Red should highlight orientation and decisions rather than fill entire sections.

## Type

- Headlines: **Unbounded 800–900**, uppercase, tight tracking, oversized display scale.
- Body and UI: **Inter 400–800**, generous line height, clear labels.
- The reference uses Benzin for prominent headings. Unbounded is a freely accessible substitute used to avoid redistributing a commercial font.

## Motion

- Reveal on entering viewport: **620 ms**, `translateY(18px)` + fade, once only.
- Interactive states: **180–320 ms**, moderate hover motion (maximum 4 px).
- No looping introductory animation, strobe, autoscroll, exaggerated parallax or forced scroll hijacking.
- Reduced-motion users get immediate content with non-animated behavior.

## Layout rules

- Container width: maximum 1320 px.
- Desktop: 4 original abstract hero panels, 3-column cards.
- Tablet: 2-column panels and cards.
- Phone: hero panels in touch-friendly horizontal scroll; all project cards stack vertically.
- Straight edges, fine borders, sparse emphasis and purposeful whitespace.

## Future design approvals

Before publishing, choose/confirm the public email, GitHub URL and LinkedIn URL. Optionally decide whether you want a portrait, a more technical data visualization on the hero, or a different default language. These choices are not blockers for reviewing the visual language.
