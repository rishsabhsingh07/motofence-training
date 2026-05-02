# Design Brief: MotoFence Courses & Training

**Category:** Showcase (Dark-mode only) | **Theme:** Industrial automotive, premium enterprise

## Palette
| Name | OKLCH | Use |
|------|-------|-----|
| Background | 0.065 0 0 | Deep black primary bg |
| Foreground | 0.95 0 0 | Crisp white text |
| Accent/Primary | 0.55 0.22 25 | Destructive red (#CC0000) |
| Card | 0.1 0 0 | Elevated black layers |
| Border | 0.15 0 0 | Subtle grid dividers |
| Muted | 0.2 0 0 | Secondary hierarchy |

## Typography
| Role | Font | Use |
|------|------|-----|
| Display | Space Grotesk 700 | Headlines, tier names |
| Body | General Sans 400-600 | Copy, descriptions |
| Mono | Courier New 400 | Pricing labels |

## Structural Zones
| Zone | Treatment | Purpose |
|------|-----------|----------|
| Header | `bg-card border-b` | MotoFence branding |
| Hero | `bg-background` | Bold headline, subheading |
| Table | `bg-background` | Three-column tier grid |
| Headers | `bg-accent text-white` | BASIC, ADVANCED, PRO |
| Cells | `bg-card border` | Course data |
| CTAs | `bg-accent text-white` | Enroll buttons |
| Footer | `bg-card border-t` | Links, info |

## Patterns
- Comparison table is hero element; red accent on black creates premium automotive feel
- Hover states: `shadow-card` lift, crisp white text preserved
- CTA buttons: `bg-accent` with high contrast white text
- No gradients, no decorative patterns; high-contrast grid alignment
- Accent sparingly: tier headers, CTAs, key highlights only

## Constraints
- Dark mode only (industrial aesthetic)
- Geometric sans-serif display font exclusively
- AA+ WCAG contrast maintained
- Sharp corners (minimal rounding), 8px grid baseline
