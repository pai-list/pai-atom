// Hallmark + StyleSeed + Impeccable + Scrollytelling: Navigation Components Implementation

import React, { ReactNode } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = ''
}) => {
  return (
    <nav
      className={`breadcrumb ${className}`}
      aria-label="breadcrumb"
      data-hallmark="honest"
    >
      <ol className="breadcrumb-list" data-hallmark="honest">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.current ? 'current' : ''}`}
            data-hallmark="honest"
          >
            {item.current ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href} data-hallmark="honest">{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultActive?: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActive = tabs[0]?.id || '',
  className = ''
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultActive);

  return (
    <div className={`tabs ${className}`} data-hallmark="honest">
      <div className="tab-headers" data-hallmark="honest">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-header ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            data-hallmark="honest"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content" data-hallmark="honest">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id} className="tab-pane" data-hallmark="honest">
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

interface StepperProps {
  steps: Array<{ id: string; label: string; description?: string }>;
  currentStep: string;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  className = ''
}) => {
  return (
    <div className={`stepper ${className}`} data-hallmark="honest">
      <div className="stepper-container" data-hallmark="honest">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step ${step.id === currentStep ? 'active' : ''} ${index === steps.length - 1 ? 'last' : ''}`}
            data-hallmark="honest"
          >
            <div className="step-header" data-hallmark="honest">
              <div className="step-number" data-hallmark="honest">{index + 1}</div>
              <div className="step-title" data-hallmark="honest">
                <h3>{step.label}</h3>
                {step.description && <p>{step.description}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hallmark + StyleSeed + Impeccable + Scrollytelling: Domain-Specific Navigation Components

export const AuthNavigation: React.FC<{ currentPage: string }> = ({ currentPage }) => {
  const steps = [
    { id: 'login', label: 'Login', description: 'Sign in to your account' },
    { id: 'register', label: 'Register', description: 'Create a new account' },
    { id: 'verify', label: 'Verify', description: 'Verify your email' }
  ];

  return (
    <Stepper
      steps={steps}
      currentStep={currentPage}
      className="auth-navigation"
      data-hallmark="honest"
    />
  );
};

export const MCPSidebar: React.FC<{ items: Array<{ label: string; href: string; active?: boolean }> }> = ({ items }) => {
  return (
    <nav className="mcp-sidebar" data-hallmark="honest">
      <ul className="sidebar-menu" data-hallmark="honest">
        {items.map((item, index) => (
          <li key={index} className="sidebar-item" data-hallmark="honest">
            <a
              href={item.href}
              className={`sidebar-link ${item.active ? 'active' : ''}`}
              data-hallmark="honest"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const MemoryNavigation: React.FC<{ breadcrumbs: BreadcrumbItem[] }> = ({ breadcrumbs }) => {
  return (
    <Breadcrumb
      items={breadcrumbs}
      className="memory-navigation"
      data-hallmark="honest"
    />
  );
};

export default {
  Breadcrumb,
  Tabs,
  Stepper,
  AuthNavigation,
  MCPSidebar,
  MemoryNavigation
};