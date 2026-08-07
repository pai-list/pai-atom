// Hallmark + StyleSeed + Impeccable + Scrollytelling: Animation and Motion Components

import React, { ReactNode } from 'react';

interface AnimationProviderProps {
  children: ReactNode;
  animationLibrary?: 'gsap' | 'scrollmagic' | 'custom';
  config?: any;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({
  children,
  animationLibrary = 'gsap',
  config = {}
}) => {
  const [animationReady, setAnimationReady] = React.useState(false);

  React.useEffect(() => {
    const initAnimations = () => {
      if (animationLibrary === 'gsap' && typeof window !== 'undefined') {
        // GSAP animations initialization
        if (typeof gsap !== 'undefined') {
          gsap.registerPlugin(ScrollTrigger);
          setAnimationReady(true);
        }
      } else if (animationLibrary === 'scrollmagic' && typeof window !== 'undefined') {
        // ScrollMagic animations initialization
        if (typeof ScrollMagic !== 'undefined') {
          setAnimationReady(true);
        }
      } else {
        setAnimationReady(true);
      }
    };

    if (document.readyState === 'complete') {
      initAnimations();
    } else {
      window.addEventListener('load', initAnimations);
      return () => window.removeEventListener('load', initAnimations);
    }
  }, [animationLibrary]);

  return (
    <div className="animation-provider" data-hallmark="honest" data-animation-library={animationLibrary}>
      {animationReady ? children : (
        <div className="animation-loading" data-hallmark="honest">
          Loading animations...
        </div>
      )}
    </div>
  );
};

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'slideUp' | 'fadeIn' | 'scale' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  duration?: number;
  ease?: string;
  threshold?: number;
  trigger?: 'viewport' | 'scroll' | 'manual';
  className?: string;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  ease = 'power2.out',
  threshold = 0.1,
  trigger = 'viewport',
  className = ''
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'slideUp':
        return isVisible ? 'animate-slide-up' : '';
      case 'fadeIn':
        return isVisible ? 'animate-fade-in' : '';
      case 'scale':
        return isVisible ? 'animate-scale' : '';
      case 'slideInLeft':
        return isVisible ? 'animate-slide-in-left' : '';
      case 'slideInRight':
        return isVisible ? 'animate-slide-in-right' : '';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={`scroll-animation ${getAnimationClass()} ${className}`}
      style={
        isVisible ? {
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          animationTimingFunction: ease
        } : {}
      }
      data-hallmark="honest"
      data-animation={animation}
      data-trigger={trigger}
    >
      {children}
    </div>
  );
};

interface ProgressBarProps {
  progress: number;
  height?: string;
  color?: string;
  backgroundColor?: string;
  showPercentage?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = '8px',
  color = '#6865f2',
  backgroundColor = '#e0e0e0',
  showPercentage = false,
  className = ''
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={`progress-bar-container ${className}`}
      style={{ height, backgroundColor }}
      data-hallmark="honest"
    >
      <div
        className="progress-bar-fill"
        style={{ width: `${clampedProgress}%`, backgroundColor }}
        data-hallmark="honest"
      />
      {showPercentage && (
        <div className="progress-text" data-hallmark="honest">
          {Math.round(clampedProgress)}%
        </div>
      )}
    </div>
  );
};

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = ''
}) => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setOffset(scrollTop * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${offset}px)`;
      case 'down':
        return `translateY(-${offset}px)`;
      case 'left':
        return `translateX(${offset}px)`;
      case 'right':
        return `translateX(-${offset}px)`;
      default:
        return 'none';
    }
  };

  return (
    <div
      className={`parallax ${className}`}
      style={{ transform: getTransform() }}
      data-hallmark="honest"
      data-parallax-speed={speed}
      data-parallax-direction={direction}
    >
      {children}
    </div>
  );
};

// Hallmark + StyleSeed + Impeccable + Scrollytelling: Domain-Specific Animation Components

export const AuthAnimations: React.FC<{ stage: 'login' | 'register' | 'verify' }> = ({ stage }) => {
  const getAnimationConfig = () => {
    switch (stage) {
      case 'login':
        return { animation: 'fadeIn', duration: 0.5 };
      case 'register':
        return { animation: 'slideUp', duration: 0.7 };
      case 'verify':
        return { animation: 'scale', duration: 0.8 };
      default:
        return { animation: 'fadeIn', duration: 0.5 };
    }
  };

  const config = getAnimationConfig();

  return (
    <AnimationProvider animationLibrary="gsap">
      <ScrollAnimation animation={config.animation as any} duration={config.duration}>
        <div className="auth-animations" data-hallmark="honest">
          <h2>Stage: {stage}</h2>
        </div>
      </ScrollAnimation>
    </AnimationProvider>
  );
};

export const MCPAnimations: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  return (
    <AnimationProvider animationLibrary="gsap">
      <ScrollAnimation animation="slideInRight" delay={0.2} duration={0.6}>
        <div className="mcp-animations" data-hallmark="honest">
          <h3>Active Tab: {activeTab}</h3>
        </div>
      </ScrollAnimation>
    </AnimationProvider>
  );
};

export default {
  AnimationProvider,
  ScrollAnimation,
  ProgressBar,
  Parallax,
  AuthAnimations,
  MCPAnimations
};