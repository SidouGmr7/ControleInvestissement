import { UsersService } from '../../firebase/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  users: User[] =[];
  constructor(public UsersService:UsersService) { }

  ngOnInit(): void {
   this.ShowAllUsers()
    }
    ShowAllUsers(){
      this.UsersService.GetAllUsers().subscribe(users =>{
        this.users = users;
      })
  }

}
