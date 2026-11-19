import { hallmarkRules, styleseedGrammar, scrollytellingValidation, impeccableDetectors, ScoringUtils } from './rules.ts';

export class DesignGateValidator {
  private rules: any;
  private score: number = 1;
  private violations: string[] = [];

  constructor() {
    this.rules = {
      ...hallmarkRules,
      ...styleseedGrammar,
      ...scrollytellingValidation,
      ...impeccableDetectors
    };
  }

  validateElement(element: HTMLElement): { score: number; violations: string[] } {
    let elementScore = this.score;
    const elementViolations: string[] = [];

    // Validate against each rule
    Object.entries(this.rules).forEach(([ruleName, rule]) => {
      if (!rule.validate(element)) {
        elementViolations.push(`${ruleName}: ${rule.description}`);
        elementScore -= rule.penalty;
      }
    });

    return { score: elementScore, violations: elementViolations };
  }

  validatePage(): { totalScore: number; violations: string[] } {
    const allElements = document.querySelectorAll('*:not(script):not(style)');
    let totalScore = this.score;
    const allViolations: string[] = [];

    allElements.forEach((element) => {
      const result = this.validateElement(element as HTMLElement);
      totalScore += result.score;
      allViolations.push(...result.violations.map(v => `Element: ${(element as HTMLElement).tagName} - ${v}`));
    });

    return { totalScore: Math.min(100, totalScore), violations: allViolations };
  }

  getQualityGateStatus(score: number): 'excellent' | 'good' | 'acceptable' | 'needs_improvement' | 'failing' {
    if (score >= 80) return 'excellent';
    if (score >= 70) return 'good';
    if (score >= 60) return 'acceptable';
    if (score >= 50) return 'needs_improvement';
    return 'failing';
  }

  getRuleViolations(element: HTMLElement): string[] {
    return Object.entries(this.rules)
      .filter(([ruleName, rule]) => !rule.validate(element))
      .map(([ruleName, rule]) => `${ruleName}: ${rule.description}`);
  }
}

export default DesignGateValidator;