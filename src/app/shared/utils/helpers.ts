export function assign<T>(oldState: T, newState: Partial<T>): T {
  return Object.assign({}, oldState, newState);
}
