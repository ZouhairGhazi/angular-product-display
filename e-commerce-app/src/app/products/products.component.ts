import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit(){

    this.httpClient.get("assets/products.json").subscribe(data =>{
      this.products = data;
    })
  }

}
