import { User } from './../interfaces/user';

export class DatabaseClassic {
  private static _instance?: DatabaseClassic;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): DatabaseClassic {
    if (DatabaseClassic._instance == undefined) {
      DatabaseClassic._instance = new DatabaseClassic();
    }

    return DatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
