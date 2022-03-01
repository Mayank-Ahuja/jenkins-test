import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateCounterService {

  userUpdateCount: number = 0;
  constructor() { }

  updateCount():void{
    this.userUpdateCount += 1;
  }
}
