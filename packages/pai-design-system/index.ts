import { DesignSystem } from './core/design-system.js';
import { Scrollytelling } from './core/design-system.js';

// Hallmark: Technical precision - component exports
import { default as btnComponent } from '../components/btn.css';
import { default as cardComponent } from '../components/card.css';
import { default as navComponent } from '../components/nav.css';
import { default as formComponent } from '../components/form.css';

// StyleSeed: Grammar enforcement - pattern exports
import { default as patterns } from '../patterns/pai-patterns.css';

// Scrollytelling: Animation exports
import { default as motionSystem } from '../motion/pai-motion.css';

// Impeccable: Quality gate exports
import { default as qualityGates } from '../patterns/pai-patterns.css';

// Design tokens exports
import { default as tokens } from '../tokens/pai-tokens.json';

// Re-export with alias for backward compatibility
export { DesignSystem, Scrollytelling };
export { default as tokens } from '../tokens/pai-tokens.json';
export { default as btnComponent } from '../components/btn.css';
export { default as cardComponent } from '../components/card.css';
export { default as navComponent } from '../components/nav.css';
export { default as formComponent } from '../components/form.css';
export { default as patterns } from '../patterns/pai-patterns.css';
export { default as motionSystem } from '../motion/pai-motion.css';
export { default as qualityGates } from '../patterns/pai-patterns.css';

// Hallmark: Technical precision - TypeScript definitions
export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: {
      [key: string]: string;
    };
    semantic: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };
  typography: {
    fontFamily: {
      heading: string;
      body: string;
      mono: string;
    };
    fontSizes: {
      display: string;
      h1: string;
      h2: string;
      h3: string;
      body: string;
      small: string;
      caption: string;
    };
    fontWeights: {
      normal: string;
      medium: string;
      bold: string;
    };
  };
  spacing: {
    [key: string]: string;
  };
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  motion: {
    transition: {
      fast: string;
      normal: string;
      slow: string;
    };
    animations: {
      slideUp: string;
      fadeIn: string;
      scale: string;
    };
  };
}

export interface DesignSystemConfig {
  narrative: boolean;
  animation: {
    duration: number;
    ease: string;
  };
  navigation: {
    smooth: boolean;
    offset: number;
  };
  progress: {
    enabled: boolean;
    continuous: boolean;
  };
  animationLibraries: {
    gsap: boolean;
    scrollMagic: boolean;
  };
  accessibility: {
    reducedMotion: boolean;
    keyboardNavigation: boolean;
  };
}

// Hallmark: Technical precision - Main initialization function
export function initializeDesignSystem(config?: Partial<DesignSystemConfig>): DesignSystem {
  return new DesignSystem(config);
}

export default {
  DesignSystem,
  Scrollytelling,
  tokens,
  btnComponent,
  cardComponent,
  navComponent,
  formComponent,
  patterns,
  motionSystem,
  qualityGates,
  initializeDesignSystem
};