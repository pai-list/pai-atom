// Hallmark + StyleSeed + Impeccable + Scrollytelling: Quality Gate Dashboard

import React, { useState, useEffect } from 'react';
import { DesignGateValidator } from './core/validation/design-gate-validator.ts';
import { allRules } from './core/validation/rules.ts';

interface QualityGateResult {
  status: 'excellent' | 'good' | 'acceptable' | 'needs_improvement' | 'failing';
  score: number;
  violations: string[];
}

export const QualityGateDashboard: React.FC = () => {
  const [validator] = useState(() => new DesignGateValidator());
  const [currentScore, setCurrentScore] = useState(0);
  const [currentStatus, setCurrentStatus] = useState<QualityGateResult['status']>('acceptable');
  const [violations, setViolations] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runQualityGate = () => {
    setIsRunning(true);
    setTimeout(() => {
      const result = validator.validatePage();
      setCurrentScore(result.totalScore);
      setCurrentStatus(validator.getQualityGateStatus(result.totalScore));
      setViolations(result.violations);
      setIsRunning(false);
    }, 500);
  };

  useState(() => {
    runQualityGate();
  });

  const getScoreColor = (status: string) => {
    switch (status) {
      case 'excellent': return '#2ecc71';
      case 'good': return '#3498db';
      case 'acceptable': return '#f39c12';
      case 'needs_improvement': return '#e67e22';
      case 'failing': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  const getScoreDescription = (status: string) => {
    switch (status) {
      case 'excellent': return 'Excellent compliance with all Hallmark, StyleSeed, and Impeccable standards';
      case 'good': return 'Good compliance with minor improvements needed';
      case 'acceptable': return 'Acceptable compliance with several improvements needed';
      case 'needs_improvement': return 'Needs significant improvements to meet standards';
      case 'failing': return 'Failing quality gate - critical issues must be addressed';
      default: return 'Unknown status';
    }
  };

  return (
    <div className="quality-gate-dashboard" data-hallmark="honest">
      <h2>Design System Quality Gate</h2>
      
      <div className="score-container">
        <div
          className="score-circle"
          style={{ borderColor: getScoreColor(currentStatus) }}
          data-hallmark="honest"
        >
          <span className="score-number" style={{ color: getScoreColor(currentStatus) }}>{currentScore}</span>
          <span className="score-max">/100</span>
        </div>
        <div className="status-info">
          <h3 style={{ color: getScoreColor(currentStatus) }}>{currentStatus.toUpperCase()}</h3>
          <p>{getScoreDescription(currentStatus)}</p>
        </div>
      </div>

      {violations.length > 0 && (
        <div className="violations-section">
          <h3>Rule Violations</h3>
          <ul className="violations-list">
            {violations.slice(0, 10).map((violation, index) => (
              <li key={index} className="violation-item">
                {violation}
              </li>
            ))}
            {violations.length > 10 && (
              <li>+{violations.length - 10} more violations</li>
            )}
          </ul>
        </div>
      )}

      <div className="rules-summary">
        <h3>Compliance Rules Summary</h3>
        <div className="rules-grid">
          {Object.entries(allRules).slice(0, 6).map(([ruleName, rule]) => {
            const violationsForRule = violations.filter(v => v.includes(ruleName));
            return (
              <div key={ruleName} className="rule-item">
                <span className={`rule-status ${violationsForRule.length > 0 ? 'failed' : 'passed'}`}></span>
                <span className="rule-name">{ruleName}</span>
                <span className="rule-violations">{violationsForRule.length}</span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={runQualityGate}
        disabled={isRunning}
        className="btn btn-primary refresh-button"
        data-hallmark="honest"
      >
        {isRunning ? 'Running Quality Gate...' : 'Run Quality Gate'}
      </button>
    </div>
  );
};

export default QualityGateDashboard;