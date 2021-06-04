import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  @Output() clickedCheck = new EventEmitter();
  constructor(private userService: UserService) {};

  ngOnInit(){
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    this.clickedCheck.emit();
  }
}
