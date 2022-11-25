import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  id: any;

  total: number = 0;

  status: String = "";

  orders: any = [];

  order: any = [];


  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.httpClient.get("assets/orders.json").subscribe(data =>{
      this.orders = data;
      for (var ord of this.orders) {
        if (ord.id == this.id)
          this.order = ord;
      }
      this.total = Number(this.order['subtotal']) + Number(this.order['shipping-cost']) - Number(this.order['discount']);
      this.status = this.order['status'];
    })
  }

  getClass(){
    switch (this.order['status']){
      case 'Completed': 
        return 'completed';
      case 'Shipped': 
        return 'shipped';
      default: 
        return 'cancelled';
    }
 }

}
