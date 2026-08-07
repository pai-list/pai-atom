// Hallmark + StyleSeed + Impeccable + Scrollytelling: Design System Component Library

import React from 'react';
import { ButtonProps, CardProps, NavigationProps, FormProps, LayoutProps, ScrollytellingProps } from './types.ts';
import { hallmarkRules, styleseedGrammar, scrollytellingValidation, impeccableDetectors, ScoringUtils } from './validation/rules.ts';
import { DesignGateValidator } from './validation/design-gate-validator.ts';

// Hallmark: Technical precision - Button Component
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  className = '',
  'aria-label': ariaLabel
}) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    minimal: 'btn-minimal',
    hallmark: 'btn-hallmark'
  };
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      data-hallmark="honest"
    >
      {loading ? 'Processing...' : 'Execute'}
    </button>
  );
};

// Hallmark: Technical precision - Card Component
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  className = '',
  children,
  onClick
}) => {
  const baseClasses = 'card';
  const variantClasses = {
    default: 'card-default',
    highlight: 'card-highlight',
    sovereign: 'card-sovereign',
    interactive: 'card-interactive'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div
      className={classes}
      onClick={onClick}
      data-hallmark="honest"
    >
      {children}
    </div>
  );
};

// Hallmark: Technical precision - Navigation Component
export const Navigation: React.FC<NavigationProps> = ({
  items,
  variant = 'default',
  className = ''
}) => {
  const baseClasses = 'nav';
  const variantClasses = {
    default: '',
    sovereign: 'nav-sovereign',
    minimal: 'nav-minimal',
    scroll: 'nav-scroll'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <nav className={classes} data-hallmark="honest">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`nav-link ${item.active ? 'active' : ''}`}
          data-hallmark="honest"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

// Hallmark: Technical precision - Form Component
export const Form: React.FC<FormProps> = ({
  variant = 'default',
  className = '',
  onSubmit,
  children
}) => {
  const baseClasses = 'form';
  const variantClasses = {
    default: '',
    sovereign: 'form-sovereign',
    minimal: 'form-minimal'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <form
      className={classes}
      onSubmit={onSubmit}
      data-hallmark="honest"
    >
      {children}
    </form>
  );
};

// Hallmark: Technical precision - Layout Component
export const Layout: React.FC<LayoutProps> = ({
  variant = 'default',
  className = '',
  children
}) => {
  const baseClasses = 'layout';
  const variantClasses = {
    default: '',
    sovereign: 'layout-sovereign',
    scroll: 'layout-scroll',
    'quality-gate': 'layout-quality-gate'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes} data-hallmark="honest">
      {children}
    </div>
  );
};

// Hallmark: Technical precision - Scrollytelling Component
export const Scrollytelling: React.FC<ScrollytellingProps> = ({
  sections,
  animation = 'gsap',
  narrative = true
}) => {
  return (
    <div className="scrollytelling-container" data-hallmark="honest">
      {sections.map((section, index) => (
        <section
          key={index}
          id={section.id}
          className="scroll-section"
          data-scroll-section
          data-hallmark="honest"
        >
          <h2>{section.title}</h2>
          <div>{section.content}</div>
        </section>
      ))}
    </div>
  );
};

// Hallmark: Technical precision - Quality Gate Component
export const QualityGate: React.FC = () => {
  const [validator] = React.useState(() => new DesignGateValidator());
  const [score, setScore] = React.useState(0);
  const [violations, setViolations] = React.useState<string[]>([]);

  React.useEffect(() => {
    const result = validator.validatePage();
    setScore(result.totalScore);
    setViolations(result.violations);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return '#2ecc71';
      case 'good': return '#3498db';
      case 'acceptable': return '#f39c12';
      case 'needs_improvement': return '#e67e22';
      case 'failing': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="quality-gate" data-hallmark="honest">
      <h3>Design Gate Quality Score</h3>
      <div className="score-display" style={{ color: getStatusColor(validator.getQualityGateStatus(score)) }}>
        {score}/100
      </div>
      {violations.length > 0 && (
        <div className="violations">
          <h4>Rule Violations</h4>
          <ul>
            {violations.slice(0, 5).map((violation, index) => (
              <li key={index}>{violation}</li>
            ))}
            {violations.length > 5 && (
              <li>+{violations.length - 5} more violations</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default {
  Button,
  Card,
  Navigation,
  Form,
  Layout,
  Scrollytelling,
  QualityGate
};