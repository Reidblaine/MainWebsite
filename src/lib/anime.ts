// Simplified anime.js implementation based on v4.0.2
// This is a fallback if the import of the actual library doesn't work

type EasingFunction = string | ((el: Element, index: number, total: number) => number);
type EasingTypes = 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' |
  'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' |
  'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInSine' |
  'easeOutSine' | 'easeInOutSine' | 'easeInExpo' | 'easeOutExpo' | 'easeInOutExpo' |
  'easeInCirc' | 'easeOutCirc' | 'easeInOutCirc' | 'easeInBack' | 'easeOutBack' |
  'easeInOutBack' | 'easeInElastic' | 'easeOutElastic' | 'easeInOutElastic' |
  'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce';

interface AnimeParams {
  targets?: Element | Element[] | string | NodeList;
  duration?: number;
  delay?: number | ((el: Element, index: number, total: number) => number);
  easing?: EasingTypes | EasingFunction;
  elasticity?: number;
  [property: string]: any;
}

interface AnimeInstance {
  animatables: any[];
  animations: any[];
  duration: number;
  complete?: () => void;
  [property: string]: any;
}

interface AnimeStatic {
  (params: AnimeParams): AnimeInstance;
  ease: Record<string, (t: number) => number>;
  stagger: (value: number, options?: { [key: string]: any }) => (el: Element, i: number, l: number) => number;
  timeline: (params?: any) => any;
  random: (min: number, max: number) => number;
  speed: number;
  running: AnimeInstance[];
  [property: string]: any;
}

const defaultInstance: AnimeInstance = {
  animatables: [],
  animations: [],
  duration: 1000,
};

// Basic stagger function
function stagger(value: number = 0, options: { [key: string]: any } = {}) {
  return function(el: Element, i: number, l: number) {
    if (options.from === 'center') {
      const center = Math.floor(l / 2);
      return value * Math.abs(center - i);
    }
    return i * value;
  };
}

// Create basic anime function
const anime: AnimeStatic = function(params: AnimeParams) {
  const targets = params.targets || null;
  
  // Create basic instance
  const instance: AnimeInstance = {
    ...defaultInstance,
    ...params,
  };

  // In a real implementation, we would animate elements
  // but for fallback, we just return the instance
  if (typeof window !== 'undefined') {
    // Schedule any animation completion callback
    if (params.complete) {
      setTimeout(() => {
        params.complete && params.complete();
      }, params.duration || 1000);
    }
  }
  
  return instance;
} as AnimeStatic;

// Add utility properties and methods
anime.stagger = stagger;
anime.random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
anime.speed = 1;
anime.running = [];
anime.ease = {
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInExpo: (t: number) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: (t: number) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if ((t *= 2) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
    return 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
  }
};

export default anime; 