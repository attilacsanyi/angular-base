const webStorageMock = () => {
  let storage: Record<string, any> = {};
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: any) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {})
  };
};

Object.defineProperty(window, 'localStorage', { value: webStorageMock() });
Object.defineProperty(window, 'sessionStorage', { value: webStorageMock() });
Object.defineProperty(document, 'doctype', { value: '<!DOCTYPE html>' });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({ display: 'none', appearance: ['-webkit-appearance'], getPropertyValue: () => '' })
});

Object.defineProperty(window, 'matchMedia', { value: () => ({ matches: true }) });
Object.defineProperty(window, 'CSS', { value: '' });

/**
 * JSDOM missing transform property when using Angular Material, there is a workaround for it
 * ISSUE: https://github.com/angular/material2/issues/7101
 * https://github.com/thymikee/jest-preset-angular#the-animation-trigger-transformmenu-has-failed
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
