/**
 * Source: https://www.xfive.co/blog/testing-angular-faster-jest/
 */
import 'jest-preset-angular';

import './jest-global-mocks';

/** Zone shorter output and more meaningful error stack traces */
Error.stackTraceLimit = 2;
