/** ISSUE: https://stackoverflow.com/questions/52696154/latest-typescript-breaking-changes-in-lib-dom-ts-file */
interface Element {
  msMatchesSelector(selectors: string): boolean;
}
