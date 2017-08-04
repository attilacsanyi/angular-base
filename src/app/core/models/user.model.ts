export class User {
  constructor(
    public name: string,
    public age: number) { }
}

export const testUser = new User('Attila', 34);
