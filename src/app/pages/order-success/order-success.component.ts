import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  orderDetails: any;
  constructor(private dataService: DataService) {

  }
  ngOnInit() {
    this.dataService.newOrder$.subscribe((data: any) => {
      console.log(data)
      this.orderDetails = data;
    })
  }
}
