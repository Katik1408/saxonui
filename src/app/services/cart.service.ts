import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";



const API_URL = environment.apiURL;
const ADD_TO_CART = 'api/addToCart';
const GET_CART_DETAILS = 'api/getCart';
const DELETE_CART = 'api/deleteCart'
@Injectable({
    providedIn: 'root'
})

export class CartService {

    constructor(private httpClient: HttpClient) { }

    addToCart(cartDetails: any, emailid: any) {
        return this.httpClient.post<any>(`${API_URL}/${ADD_TO_CART}?emailid=${emailid}`, cartDetails)
    }

    deleteCart(emailId: any) {
        return this.httpClient.delete<any>(`${API_URL}/${DELETE_CART}?emailid=${emailId}`)
    }

    getCartDetails(emailid: any) {
        return this.httpClient.get<any>(`${API_URL}/${GET_CART_DETAILS}?emailid=${emailid}`)
    }


    updateCart() {

    }

}