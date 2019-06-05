/** IE10, IE11 polyfills for object methods for example object.values and object.entries */
import 'core-js/es7/object';

// ISSUE: https://github.com/angular/angular/issues/24769
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'classlist.js'; // Run `npm install --save classlist.js`.
