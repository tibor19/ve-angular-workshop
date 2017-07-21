import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  isAuthenticated(): boolean {
    return true;
  }
}
