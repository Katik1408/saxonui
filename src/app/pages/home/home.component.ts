import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import P from 'src/assets/json/pizza.json';
import { CustomizeModalComponent } from '../customize-modal/customize-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //pizzas: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  pizzas: any;

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }
  ngOnInit(): void {
    this.pizzas = P.pizza;
    console.log(this.pizzas)
  }

  openModal(index: number) {
    this.modalRef = this.modalService.show(CustomizeModalComponent, {
      class: 'gray modal-lg',
      focus: true,
      initialState: { index: index }
    });
    this.modalRef.content.closeBtnName = 'Close';
    this.modalRef.content.index = index;
  }

}

