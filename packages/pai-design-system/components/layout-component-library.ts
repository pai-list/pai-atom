// Hallmark + StyleSeed + Impeccable + Scrollytelling: Layout Components Implementation

import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'xl',
  className = ''
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full'
  };

  return (
    <div
      className={`container mx-auto px-4 ${maxWidthClasses[maxWidth]} ${className}`}
      data-hallmark="honest"
    >
      {children}
    </div>
  );
};

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 12,
  gap = 'md',
  className = ''
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12'
  };

  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  return (
    <div
      className={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`}
      data-hallmark="honest"
    >
      {children}
    </div>
  );
};

interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'col';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  wrap?: boolean;
  className?: string;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
  wrap = false,
  className = ''
}) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col'
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around'
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline'
  };

  return (
    <div
      className={`flex ${directionClasses[direction]} ${justifyClasses[justify]} ${alignClasses[align]} ${wrap ? 'flex-wrap' : ''} ${className}`}
      data-hallmark="honest"
    >
      {children}
    </div>
  );
};

interface CardGridProps {
  children: ReactNode;
  cols?: number;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
  children,
  cols = 3,
  gap = 'md',
  className = ''
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  };

  return (
    <Grid
      cols={12 as any}
      gap={gap}
      className={`${colsClasses[cols as keyof typeof colsClasses]} ${gapClasses[gap]} ${className}`}
      data-hallmark="honest"
    >
      {React.Children.map(children, (child, index) => (
        <div className="col-span-1" data-hallmark="honest">
          {child}
        </div>
      ))}
    </Grid>
  );
};

// Hallmark + StyleSeed + Impeccable + Scrollytelling: Domain-Specific Layout Components

export const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="md" className="auth-layout" data-hallmark="honest">
      <div className="auth-container" data-hallmark="honest">
        {children}
      </div>
    </Container>
  );
};

export const MCPLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="xl" className="mcp-layout" data-hallmark="honest">
      <div className="mcp-container" data-hallmark="honest">
        {children}
      </div>
    </Container>
  );
};

export const MemoryLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="full" className="memory-layout" data-hallmark="honest">
      <div className="memory-container" data-hallmark="honest">
        {children}
      </div>
    </Container>
  );
};

export const GSpaceLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="full" className="gspace-layout" data-hallmark="honest">
      <div className="gspace-container" data-hallmark="honest">
        {children}
      </div>
    </Container>
  );
};

export const EarnLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="xl" className="earn-layout" data-hallmark="honest">
      <div className="earn-container" data-hallmark="honest">
        {children}
      </div>
    </Container>
  );
};

export default {
  Container,
  Grid,
  Flex,
  CardGrid,
  AuthLayout,
  MCPLayout,
  MemoryLayout,
  GSpaceLayout,
  EarnLayout
};