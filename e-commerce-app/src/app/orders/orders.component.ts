import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit(){

    this.httpClient.get("assets/orders.json").subscribe(data =>{
      this.orders = data;
    })
  }

}
