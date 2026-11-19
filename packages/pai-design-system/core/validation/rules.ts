/* Hallmark: Anti-AI-slop rules and validation patterns */
export const hallmarkRules = {
  // Rule 1: No "AI-generated" aesthetics
  noAIGeneratedAesthetics: {
    description: 'All displays show honest capabilities, no simulated functionality',
    validate: (element: HTMLElement): boolean => {
      return element.dataset.honest !== 'false' && element.style.display !== 'none';
    },
    penalty: 20
  },

  // Rule 2: No default indigo (#4f46e5)
  noDefaultIndigo: {
    description: 'No default indigo (#4f46e5) - using #6865f2',
    validate: (element: HTMLElement): boolean => {
      return !element.style.color?.includes('#4f46e5') && 
             !element.style.backgroundColor?.includes('#4f46e5');
    },
    penalty: 20
  },

  // Rule 3: No template layouts
  noTemplateLayouts: {
    description: 'No template layouts - custom layouts only',
    validate: (element: HTMLElement): boolean => {
      return !element.classList.contains('template-layout') &&
             !element.classList.contains('default-template');
    },
    penalty: 20
  },

  // Rule 4: Minimal, technical voice
  minimalVoice: {
    description: 'Precise, technical, sovereign, minimal voice',
    validate: (element: HTMLElement): boolean => {
      return element.classList.contains('technical-voice') ||
             element.tagName.toLowerCase() === 'code';
    },
    penalty: 10
  },

  // Rule 5: Sovereign design (no centralized defaults)
  sovereignDesign: {
    description: 'Sovereign design with no centralized defaults',
    validate: (element: HTMLElement): boolean => {
      return element.classList.contains('sovereign-component') ||
             !element.hasAttribute('data-default-style');
    },
    penalty: 15
  }
};

/* StyleSeed: Grammar-based output enforcement */
export const styleseedGrammar = {
  // Rule 1: Grammar-based output
  grammarOutput: {
    description: 'Strict grammar enforcement for output consistency',
    validate: (element: HTMLElement): boolean => {
      return element.classList.contains('grammar-output') ||
             element.classList.contains('grammar-component');
    },
    penalty: 15
  },

  // Rule 2: Consistent structure
  consistentStructure: {
    description: 'Consistent structure across all components',
    validate: (element: HTMLElement): boolean => {
      return element.classList.contains('component-container') ||
             element.classList.contains('grammar-structure');
    },
    penalty: 10
  },

  // Rule 3: Intent translation
  intentTranslation: {
    description: 'Intent translation for user interaction',
    validate: (element: HTMLElement): boolean => {
      return element.classList.contains('intent-translation') ||
             element.getAttribute('aria-label') !== null;
    },
    penalty: 5
  }
};

/* Scrollytelling: Narrative section validation */
export const scrollytellingValidation = {
  narrativeSection: {
    description: 'Narrative section with scroll-based storytelling',
    validate: (element: HTMLElement): boolean => {
      return element.classList.contains('narrative-section') ||
             element.hasAttribute('data-scroll-section');
    },
    penalty: 5
  },

  scrollAnimation: {
    description: 'GSAP-powered animations for scroll sections',
    validate: (element: HTMLElement): boolean => {
      return element.classList.contains('scroll-section') ||
             element.classList.contains('scroll-animation');
    },
    penalty: 5
  }
};

/* Impeccable: Quality gate detector rules */
export const impeccableDetectors = {
  // Base score
  baseScore: {
    description: 'Base quality gate score',
    validate: (element: HTMLElement): boolean => true, // Always valid
    penalty: 0
  },

  // Hallmark compliance
  hallmarkCompliance: {
    description: 'Hallmark anti-slop compliance',
    validate: (element: HTMLElement): boolean => {
      return Object.values(hallmarkRules).every(rule => rule.validate(element));
    },
    penalty: 20
  },

  // StyleSeed grammar adherence
  styleseedAdherence: {
    description: 'StyleSeed grammar output adherence',
    validate: (element: HTMLElement): boolean => {
      return Object.values(styleseedGrammar).every(rule => rule.validate(element));
    },
    penalty: 25
  },

  // Scrollytelling implementation
  scrollytellingImplementation: {
    description: 'Scrollytelling implementation correctness',
    validate: (element: HTMLElement): boolean => {
      return Object.values(scrollytellingValidation).every(rule => rule.validate(element));
    },
    penalty: 15
  },

  // Component consistency
  componentConsistency: {
    description: 'Component consistency across domains',
    validate: (element: HTMLElement): boolean => {
      return element.classList.contains('domain-specific') ||
             element.classList.contains('component-consistent');
    },
    penalty: 20
  },

  // Cross-domain harmony
  crossDomainHarmony: {
    description: 'Cross-domain design harmony',
    validate: (element: HTMLElement): boolean => {
      return element.classList.contains('cross-domain') ||
             element.classList.contains('domain-harmony');
    },
    penalty: 19
  }
};

/* Combined validation rules */
export const allRules = {
  ...hallmarkRules,
  ...styleseedGrammar,
  ...scrollytellingValidation,
  ...impeccableDetectors
};

/* Scoring utilities */
export class ScoringUtils {
  static calculateDesignGateScore(element: HTMLElement): number {
    let score = 1;
    let totalPenalty = 0;

    // Hallmark compliance (max 20 points per rule)
    Object.entries(hallmarkRules).forEach(([ruleName, rule]) => {
      if (rule.validate(element)) {
        score += 20 - rule.penalty;
      } else {
        totalPenalty += rule.penalty;
      }
    });

    // StyleSeed adherence (max 15 points per rule)
    Object.entries(styleseedGrammar).forEach(([ruleName, rule]) => {
      if (rule.validate(element)) {
        score += 15 - rule.penalty;
      } else {
        totalPenalty += rule.penalty;
      }
    });

    // Scrollytelling implementation (max 5 points per rule)
    Object.entries(scrollytellingValidation).forEach(([ruleName, rule]) => {
      if (rule.validate(element)) {
        score += 5 - rule.penalty;
      } else {
        totalPenalty += rule.penalty;
      }
    });

    // Impeccable detectors (total max 86 points)
    Object.entries(impeccableDetectors).forEach(([ruleName, rule]) => {
      if (rule.validate(element)) {
        score += 86 / Object.keys(impeccableDetectors).length;
      } else {
        totalPenalty += rule.penalty;
      }
    });

    // Apply penalties
    score -= totalPenalty;

    return Math.min(100, Math.max(1, score));
  }

  static getRuleViolations(element: HTMLElement): string[] {
    const violations: string[] = [];

    Object.entries(allRules).forEach(([ruleName, rule]) => {
      if (!rule.validate(element)) {
        violations.push(`${ruleName}: ${rule.description}`);
      }
    });

    return violations;
  }
}

export default {
  hallmarkRules,
  styleseedGrammar,
  scrollytellingValidation,
  impeccableDetectors,
  allRules,
  ScoringUtils
};