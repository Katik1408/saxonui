import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartModel } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { OrderService } from 'src/app/services/order.service';

interface Order {
  PizzaName: any;
  PizzaPrice: any;
  Quantity: any;
}



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {
  @Input() items: Array<any> = [];

  decodedToken: any;
  totalPrice?: number = 0;
  jwtHelper = new JwtHelperService();

  token: any
  orderDetails: Order = {
    PizzaName: '',
    PizzaPrice: undefined,
    Quantity: undefined
  }
  constructor(private cartService: CartService, private orderService: OrderService, private router: Router, private dataService: DataService) {

  }


  ngOnInit() {
    
    this.token = localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    this.cartService.getCartDetails(this.decodedToken.email).subscribe((data: Array<CartModel>) => {
      console.log(data)
      this.items = data
      this.items.forEach(ele => {
        if (this.totalPrice != undefined)
          this.totalPrice += parseInt(ele.pizzaPrice)
      })
    });
  }

  placeOrder() {
    this.items.forEach(ele => {
      this.orderDetails.PizzaName += ele.pizzaName + ',';
      this.orderDetails.PizzaPrice = this.totalPrice;
      this.orderDetails.Quantity = ele.quantity
    })
    console.log(this.orderDetails)
    this.orderService.placeOrder(this.orderDetails, this.decodedToken.email).subscribe((data: any) => {
      console.log(data);
      this.dataService.newOrder(data);
      this.router.navigateByUrl("/ordersuccess")

    })

    this.cartService.deleteCart(this.decodedToken.email).subscribe((data: any) => {
      console.log(data)
    })

  }

  increment(quantity: any) {
    quantity += quantity++;
    if (this.totalPrice != undefined)
      this.totalPrice = quantity * this.totalPrice;
    console.log(quantity);
  }

  decrement(quantity: any) {
    if (quantity > 0) {
      quantity -= quantity--;
      if (this.totalPrice != undefined)
        this.totalPrice = quantity * this.totalPrice;
      console.log(quantity);
    }
    if (quantity === 0 || quantity < 0) {
      quantity = 0;
      this.removeItem()

    }
  }
  removeItem() { console.log('Called Remove item'); }
}
