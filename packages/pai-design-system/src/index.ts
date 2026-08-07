import { DesignSystem } from './design-system.js';
export { DesignSystem };
export type { DesignTokens, DesignSystemConfig } from './design-system.js';

// Re-export common design elements
export { default as tokens } from '../tokens/pai-tokens.json';
export { default as styles } from '../components/btn.css';
export { default as cards } from '../components/card.css';
export { default as navigation } from '../components/nav.css';
export { default as forms } from '../components/form.css';
export { default as layout } from '../layouts/layout.css';
export { default as patterns } from '../patterns/pai-patterns.css';
export { default as motion } from '../motion/pai-motion.css';

// Hallmark: Technical precision - Re-export design components
export { default as button } from '../components/btn.css';
export { default as card } from '../components/card.css';
export { default as nav } from '../components/nav.css';
export { default as form } from '../components/form.css';
export { default as layoutSystem } from '../layouts/layout.css';

// Scrollytelling exports
export { default as scrollytelling } from './scripts/scrollytelling.js';

// Hallmark: Technical precision - Export initialization helper
export function createDesignSystem(config?: Partial<DesignSystemConfig>): DesignSystem {
  return new DesignSystem(config);
}

export default {
  DesignSystem,
  tokens,
  styles,
  cards,
  navigation,
  forms,
  layout,
  patterns,
  motion,
  button,
  card,
  nav,
  form,
  layoutSystem,
  scrollytelling,
  createDesignSystem
};