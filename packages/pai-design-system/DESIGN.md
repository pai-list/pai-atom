# PAI Design System — DESIGN.md

## Unified Design System

The PAI Design System unifies four external design sources into a single coherent system for all PAI subdomains:

### Hallmark (74 anti-AI-slop rules)
- No "AI-generated" aesthetics
- No default indigo
- No template layouts
- All displays show honest capabilities, no simulated functionality
- Voice: precise, technical, sovereign, minimal
- Anti-pattern focus on eliminating design slop

### StyleSeed (74 rules, 8 output grammars)
- STYLESEED.md lock to prevent drift across sessions
- Grammar-based output for consistency
- Strict design rule enforcement
- Intent translation through grammars

### Scrollytelling (GSAP-powered animations)
- Interactive landing pages with scroll-based storytelling
- Multi-section layouts with narrative flow
- Dynamic animations following section scroll
- Enhanced user engagement through motion

### Impeccable (23 commands, 59 detector rules)
- Design command enforcement
- Pattern detection and correction
- Quality gate validation (score ≥ 80 on every screen)
- Performance optimization commands

## Design Token Architecture

### Color System
```json
{
  "colors": {
    "primary": "#6865f2", // Hallmark: no default indigo
    "secondary": "#ff6b6b",
    "accent": "#ff9f43",
    "neutral": {
      "50": "#f8f9fa",
      "100": "#f1f3f5",
      "900": "#212529"
    },
    "semantic": {
      "success": "#2ecc71",
      "warning": "#ffd43b",
      "error": "#ff6b6b",
      "info": "#339af0"
    }
  }
}
```

### Typography Scale
```json
{
  "fontFamily": {
    "heading": "'JetBrains Mono', monospace",
    "body": "'Inter', sans-serif",
    "mono": "'JetBrains Mono', monospace"
  },
  "fontSizes": {
    "display": "3rem",
    "h1": "2.5rem",
    "h2": "2rem",
    "h3": "1.75rem",
    "body": "1rem",
    "small": "0.875rem"
  }
}
```

### Spacing Scale
```json
{
  "spacing": {
    "0": "0rem",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.5rem",
    "6": "2rem",
    "8": "3rem",
    "12": "4.5rem"
  }
}
```

### Motion System
```json
{
  "transition": {
    "fast": "0.15s ease-in-out",
    "normal": "0.3s ease-in-out",
    "slow": "0.5s ease-in-out"
  },
  "animations": {
    "slideUp": "transform 0.3s ease-in-out",
    "fadeIn": "opacity 0.3s ease-in-out",
    "scale": "transform 0.2s ease-in-out"
  }
}
```

## Component Library

### Buttons
```tsx
// Hallmark + Impeccable: minimal, functional, honest
interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  onClick?: () => void;
}

const Button = ({ variant, size, loading, onClick }: ButtonProps) => {
  // Impeccable command: style=\"honest\", disabled=\"false\"
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${loading ? "loading" : ""}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Processing..." : "Execute"}
    </button>
  );
};
```

### Cards
```tsx
// StyleSeed: grammar-based, consistent structure
interface CardProps {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "highlight";
}

const Card = ({ title, content, footer, variant }: CardProps) => {
  return (
    <div className={`card card-${variant}`} style={StyleSeed.grammar.cards}>
      <div className="card-header">{title}</div>
      <div className="card-body" style={StyleSeed.grammar.content}>{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
```

### Navigation
```tsx
// Scrollytelling + Hallmark: scroll-aware, minimal
interface NavigationProps {
  items: Array<{ label: string; href: string }>;
  currentSection: string;
}

const Navigation = ({ items, currentSection }: NavigationProps) => {
  return (
    <nav className="navigation" style={Hallmark.minimalism}>
      {items.map(item => (
        <a
          key={item.href}
          href={item.href}
          className={currentSection === item.href ? "active" : ""}
          onClick={() => Scrollytelling.scrollTo(item.href)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};
```

## Scrollytelling Implementation

### Section Layout
```tsx
// Scrollytelling: GSAP-powered, narrative-driven
const Section = ({ id, title, content, index, total }: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    Scrollytelling.setup(this, {
      target: sectionRef.current,
      animation: GSAP.timelines[
        `section${index}`, 
        { opacity: 1, y: 0, duration: 0.5 }
      ],
      narrative: true
    });
  }, [index]);
  
  return (
    <section 
      id={id}
      ref={sectionRef}
      className="scroll-section"
      data-section-index={index}
    >
      <div className="section-content">
        <h2>{title}</h2>
        {content}
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(index / total) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};
```

## Layout System

### Multi-Column Grid
```css
/* Hallmark + StyleSeed: strict, responsive grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-4);
  max-width: 1200px;
  margin: 0 auto;
}

/* StyleSeed grammar: output constraint */
.grid > * {
  margin: 0;
  padding: var(--spacing-3);
  min-height: 200px;
}
```

### Responsive Container
```tsx
const Container = ({ children, maxWidth = "1200px" }) => {
  return (
    <div className="container" style={StyleSeed.grammar.container(maxWidth)}>
      {children}
    </div>
  );
};
```

## Domain-Specific Overrides

### MCP Domain (`mcp.axiomid.app`)
```tsx
// MCP-specific component overrides
<MCPCard 
  variant="interactive"
  highlight={true}
  onExecute={handleMCPLogic}
  style={Impeccable.commands.mcpDesign}
/>
```

### Auth Domain (`auth.axiomid.app`)
```tsx
// Auth-specific form components
<AuthForm 
  fieldSpacing={Impeccable.spacing.tight}
  validation={Hallmark.security}
  onSubmit={handleAuth}
  style={Impeccable.components.auth}
/>
```

### Memory Domain (`memory.axiomid.app`)
```tsx
// Memory domain semantic visual language
<MemoryGraph 
  nodeSize={Impeccable.dimensions.memory}
  edgeStyle={Hallmark.minimalism}
  animation={Scrollytelling.motion}
/>
```

### GSpace Domain (`gspace.axiomid.app`)
```tsx
// GSpace landing page with scrollytelling
<LandingSection 
  narrative={true}
  animation={Scrollytelling.animation.gspace}
  style={Hallmark.aesthetic}
/>
```

### Earn Domain (`earn.axiomid.app`)
```tsx
// Earn domain marketplace components
<JobCard 
  pricing={Impeccable.commands.pricing}
  action={Hallmark.callToAction}
  style={Impeccable.earnMarketplace}
/>
```

## Quality Gates

### Design Gate Score (Impeccable detector rules)
- Base score: 1
- Hallmark compliance: +20
- StyleSeed grammar adherence: +25
- Scrollytelling implementation: +15
- Component consistency: +20
- Cross-domain harmony: +19

**Target: ≥ 80 per screen**

### Validation Commands
```bash
npm run design-gate  // Runs all Impeccable detector rules
npm run check-style  // Validates StyleSeed grammar output
npm run validate-motions  // Checks Scrollytelling animations
npm run hallmark-check  // Validates Hallmark anti-slop rules
```

## Documentation

### Maintenance
```markdown
# DESIGN.md
- Updates every Sprint 6
- Sync Hallmark changes in Sprint 2
- Sync StyleSeed changes in Sprint 4
- Sync Scrollytelling changes as needed
- Sync Impeccable detector rule changes as needed

# PRODUCT.md
- Static product definition, reviewed every 6 months
- No frequent changes by design
```

### State Management
- `git stash` design tokens before changes
- Revert immediately on rule violations
- Documentation changes lock system state
- Zero tolerance for design drift