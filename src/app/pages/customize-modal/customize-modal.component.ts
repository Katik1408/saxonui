import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import P from 'src/assets/json/pizza.json';



@Component({
  selector: 'app-customize-modal',
  templateUrl: './customize-modal.component.html',
  styleUrls: ['./customize-modal.component.scss']
})
export class CustomizeModalComponent implements OnInit {

  closeBtnName?: string;
  bsModalRef!: BsModalRef;
  index?: number;
  name: any;
  category?: string;
  desc?: string;
  imgSrc?: string;
  pizzas: Array<any> = [];
  toppings: Array<any> = [];
  pizzaPrice: Array<any> = [];
  totalPizzaPrice: any;
  toppingPrice?: number = 0;
  allComplete: boolean = false;

  orderDetail: any;


  cartData = new FormGroup({
    PizzaName: new FormControl(' '),
    PizzaPrice: new FormControl(0),
    Quantity: new FormControl(0)
  });
  decodedToken: any;
  jwtHelper = new JwtHelperService();

  token: any
  constructor(private modalService: BsModalService, private router: Router, private dataService: DataService, private cartService: CartService) {

  }

  ngOnInit() {
    this.pizzas = P.pizza;
    console.log(this.index);
    console.log(this.pizzas);
    let i: number;
    for (i = 0; i < this.pizzas.length; i++) {
      if (this.index === i) {
        this.name = this.pizzas[i].name;
        this.category = this.pizzas[i].category;
        this.desc = this.pizzas[i].description;
        this.imgSrc = this.pizzas[i].img;
        this.toppings = this.pizzas[i].toppings;
        this.pizzaPrice = this.pizzas[i].pizzaprice
      }
    }
    console.log(this.pizzaPrice);

  }
  calculateToppingPrice(event: MatCheckboxChange, price: any) {

    console.log(price)

    if (event.checked) {
      if (this.toppingPrice != undefined)
        this.toppingPrice += parseInt(price);

    }
    else {
      if (this.toppingPrice != undefined)
        this.toppingPrice -= parseInt(price);
    }
  }
  calculatePrice(event: MatRadioChange) {
    this.totalPizzaPrice = event.value + this.toppingPrice;
    console.log(event)
  }

  openCart() {
    this.modalService.hide()

    console.log(this.cartData.value);

    this.cartData.setValue({
      PizzaName: this.name,
      PizzaPrice: this.totalPizzaPrice,
      Quantity: 1
    })

    console.log(this.cartData.value);
    this.token = localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    if (this.decodedToken === null) {
      this.router.navigateByUrl("/login")
    } else {
      this.cartService.addToCart(this.cartData.value, this.decodedToken.email).subscribe((data: any) => {
        console.log(data)
      });
      this.router.navigateByUrl("/cart");

    }
  }

}
