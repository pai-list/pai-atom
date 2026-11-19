// Hallmark + StyleSeed + Impeccable + Scrollytelling: Design System Component Definitions

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'minimal' | 'hallmark';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

export interface CardProps {
  variant?: 'default' | 'highlight' | 'sovereign' | 'interactive' | 'minimal';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface NavigationProps {
  items: Array<{ label: string; href: string; active?: boolean }>;
  variant?: 'default' | 'sovereign' | 'minimal' | 'scroll';
  className?: string;
}

export interface FormProps {
  variant?: 'default' | 'sovereign' | 'minimal';
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
  children?: React.ReactNode;
}

export interface LayoutProps {
  variant?: 'default' | 'sovereign' | 'scroll' | 'quality-gate';
  className?: string;
  children?: React.ReactNode;
}

export interface ScrollytellingProps {
  sections: Array<{ id: string; title: string; content: React.ReactNode }>;
  animation?: 'gsap' | 'scrollmagic' | 'minimal';
  narrative?: boolean;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  score: number;
}

export interface HallmarkCompliance {
  noAIGeneratedAesthetics: boolean;
  noDefaultIndigo: boolean;
  noTemplateLayouts: boolean;
  minimalVoice: boolean;
  sovereignDesign: boolean;
}

export interface StyleSeedGrammar {
  grammarOutput: boolean;
  consistentStructure: boolean;
  intentTranslation: boolean;
}

export interface ScrollytellingCompliance {
  narrativeSection: boolean;
  scrollAnimation: boolean;
}

export interface ImpeccableDetectors {
  baseScore: boolean;
  hallmarkCompliance: boolean;
  styleseedAdherence: boolean;
  scrollytellingImplementation: boolean;
  componentConsistency: boolean;
  crossDomainHarmony: boolean;
}

export interface QualityGateResult {
  status: 'excellent' | 'good' | 'acceptable' | 'needs_improvement' | 'failing';
  score: number;
  violations: string[];
}

export type DesignSystemValidation = HallmarkCompliance & StyleSeedGrammar & ScrollytellingCompliance & ImpeccableDetectors;

export default {
  ButtonProps,
  CardProps,
  NavigationProps,
  FormProps,
  LayoutProps,
  ScrollytellingProps,
  ValidationResult,
  HallmarkCompliance,
  StyleSeedGrammar,
  ScrollytellingCompliance,
  ImpeccableDetectors,
  QualityGateResult,
  DesignSystemValidation
};