import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private dataSource = new BehaviorSubject<any>([]);

    private orderDetails = new BehaviorSubject({});
    newOrder$ = this.orderDetails.asObservable();

    currentMessage$ = this.dataSource.asObservable();
    constructor() { }

    addPizzaToCart(order: any) {
        this.dataSource.next(order);
    }

    newOrder(order: any) {
        this.orderDetails.next(order);
    }

}