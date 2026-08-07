export { DesignSystem } from './core/design-system.js';
export { Scrollytelling } from './core/design-system.js';

export { default as tokens } from '../tokens/pai-tokens.json';
export { default as btnComponent } from '../components/btn.css';
export { default as cardComponent } from '../components/card.css';
export { default as navComponent } from '../components/nav.css';
export { default as formComponent } from '../components/form.css';
export { default as patterns } from '../patterns/pai-patterns.css';
export { default as motionSystem } from '../motion/pai-motion.css';
export { default as qualityGates } from '../patterns/pai-patterns.css';

// Type definitions
export type { DesignTokens, DesignSystemConfig } from './core/design-system.js';

// Hallmark: Technical precision - Re-export exports for backward compatibility
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
  qualityGates
};