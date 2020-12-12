/**
 * Created by andrew.yang on 7/28/2017.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { IProduct } from "../model/product";
import { Cart } from "../model/cart";

@Injectable()
export class CartService {

    public cartListSubject = new BehaviorSubject([]);
    public toggleCartSubject = new BehaviorSubject(false);

    toggleCart = () => {
        this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
    };
    addToCart = (cart: Cart) => {
        let current = this.cartListSubject.getValue();
        //debugger;
        let dup = current.find(c => c.product.ProductItemID === cart.product.ProductItemID);
        if (dup) { dup.Quantity += cart.Quantity; }
        else { current.push(cart); }
        this.cartListSubject.next(current);
    };
    reloadCart = (cartList) => {
        this.cartListSubject.next(cartList);
    };
    removeCart = index => {
        let current = this.cartListSubject.getValue();
        current.splice(index, 1);
        this.cartListSubject.next(current);
    };
    getQuantity(product: IProduct) {
        let current = this.cartListSubject.getValue();
        let cartItem = current.find(c => c.product.ProductItemID === product.ProductItemID);
        if (cartItem) {
            return cartItem.Quantity;
        } return 0;
    }
}