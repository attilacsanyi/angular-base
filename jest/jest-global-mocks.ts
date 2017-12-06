const mock = () => {
  let storage = {};
  return {
    getItem: key => (key in storage ? storage[key] : null),
    setItem: (key, value) => (storage[key] = value || ''),
    removeItem: key => delete storage[key],
    clear: () => (storage = {})
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(document, 'doctype', { value: '<!DOCTYPE html>' });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({ display: 'none', appearance: ['-webkit-appearance'], getPropertyValue: () => '' })
});

Object.defineProperty(window, 'matchMedia', { value: () => ({ matches: true }) });
Object.defineProperty(window, 'CSS', { value: '' });

/**
 * ISSUE: The animation trigger "transitionMessages" has failed to build due to the following errors:
 *         - The provided animation property "transform" is not a supported CSS property for animations
 * https://github.com/angular/material2/issues/7101
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
