import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";



const API_URL = environment.apiURL;
const PLACE_ORDER = 'api/placeorder';
@Injectable({
    providedIn: 'root'
})

export class OrderService {
    constructor(private httpClient: HttpClient) { }

    placeOrder(orderDetails: any, emailid: any) {
        return this.httpClient.post<any>(`${API_URL}/${PLACE_ORDER}?emailid=${emailid}`, orderDetails)
    }


}