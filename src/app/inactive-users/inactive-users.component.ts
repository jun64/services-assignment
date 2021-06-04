import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  @Output() clickedCheck = new EventEmitter();

  constructor(private userService:UserService){};

  ngOnInit(){
    this.users = this.userService.inactiveUsers
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.clickedCheck.emit();
  }
}
