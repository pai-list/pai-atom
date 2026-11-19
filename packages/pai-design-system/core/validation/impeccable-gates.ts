// Hallmark + StyleSeed + Impeccable + Scrollytelling: Design System Quality Gates

import { DesignGateValidator, ScoringUtils } from './validation/design-gate-validator.ts';
import { allRules } from './validation/rules.ts';

export class ImpeccableQualityGates {
  private validator: DesignGateValidator;

  constructor() {
    this.validator = new DesignGateValidator();
  }

  runQualityGates(element?: HTMLElement): { status: string; score: number; violations: string[] } {
    const target = element || document.body;
    const result = this.validator.validateElement(target);

    return {
      status: this.validator.getQualityGateStatus(result.score),
      score: result.score,
      violations: result.violations
    };
  }

  validateAll(): { status: string; score: number; violations: string[] } {
    const result = this.validator.validatePage();

    return {
      status: this.validator.getQualityGateStatus(result.totalScore),
      score: result.totalScore,
      violations: result.violations
    };
  }

  getRuleViolations(element: HTMLElement): string[] {
    return this.validator.getRuleViolations(element);
  }

  getAllRules(): any {
    return allRules;
  }

  getScoringUtils(): any {
    return ScoringUtils;
  }
}

export default ImpeccableQualityGates;