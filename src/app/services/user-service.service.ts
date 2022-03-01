import { Injectable } from '@angular/core';
import { UserUpdateCounterService } from './user-update-counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private updateAction: UserUpdateCounterService) { }

  setToActive(id: number):void {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.updateAction.updateCount();
  }

  setToInactive(id: number):void {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.updateAction.updateCount();
  }

}
