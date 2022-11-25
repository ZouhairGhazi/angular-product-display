import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];

  bro: String = "dsfd";

  constructor(private httpClient: HttpClient){}

  ngOnInit(){

    this.httpClient.get("assets/users.json").subscribe(data =>{
      this.users = data;
    })
  }

}
