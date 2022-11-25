import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: any;

  user: any = [];

  users: any = [];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.httpClient.get("assets/users.json").subscribe(data =>{
      this.users = data;
      for (var usr of this.users) {
        if (usr.id == this.id)
          this.user = usr;
      }
    })
  }

}
