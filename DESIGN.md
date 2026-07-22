---
$schema: https://github.com/google-labs-code/design.md/schema.json
version: "1.0"
name: "PAI-Atom Sovereign Design System"
author: "Mohamed H. Abdelaziz & PAI Universe"
description: "Visual Identity & Design Tokens Specification for PAI Coding Agents & Google Stitch"

tokens:
  color:
    brand:
      primary: "#00FF41" # Axiom Neon Cyber Green
      secondary: "#7C3AED" # PAI Agent Purple
      accent: "#00A36C" # OpenIdentity Mint Green
      darkBg: "#0A0A0C" # Deep Space Dark
      cardBg: "#121216" # Surface Card Dark
      textPrimary: "#F3F4F6"
      textSecondary: "#9CA3AF"

  typography:
    fontFamily:
      sans: "Inter, system-ui, -apple-system, sans-serif"
      mono: "JetBrains Mono, Fira Code, monospace"
    fontSize:
      xs: "0.75rem"
      sm: "0.875rem"
      base: "1rem"
      lg: "1.125rem"
      xl: "1.25rem"
      heading: "1.875rem"

  radii:
    sm: "0.375rem"
    md: "0.5rem"
    lg: "0.75rem"
    full: "9999px"

  spacing:
    containerPadding: "1.5rem"
    gridGap: "1rem"
---

# PAI-Atom Sovereign Design System Rationale

## Aesthetic Principles (IQRA & Liquid UI)

1. **High-Contrast Dark Mode Matrix:**
   - Dark background `#0A0A0C` accented with Axiom Neon Green `#00FF41` and PAI Agent Purple `#7C3AED`.
   - Never use plain browser defaults or plain red/blue.

2. **Accessibility & WCAG 2.1 AA Compliance:**
   - All text primary (`#F3F4F6`) must maintain a minimum contrast ratio of 4.5:1 against dark backgrounds.
   - Interactive elements must include visible focus outlines and minimum 44px tap targets.

3. **Micro-Interactions & Glassmorphism:**
   - Use subtle backdrop filter blurs (`backdrop-filter: blur(12px)`) and 1px borders (`rgba(255,255,255,0.1)`).
   - Smooth CSS transitions (`transition: all 0.2s ease-in-out`).

4. **Agent Alignment (Google Stitch Compatible):**
   - AI coding agents parsing this document must generate Next.js 15 + Tailwind v4 components matching these tokens without hallucinating arbitrary hex codes.
