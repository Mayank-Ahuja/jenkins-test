import { Component } from '@angular/core';
import { UsersService } from './services/user-service.service';
import { UserUpdateCounterService } from './services/user-update-counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private users: UsersService, 
    public actionCount: UserUpdateCounterService
  ){}

  activeUsers = this.users.activeUsers;
  inactiveUsers = this.users.inactiveUsers;
  
}
