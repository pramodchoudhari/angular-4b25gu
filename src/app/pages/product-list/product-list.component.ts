import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/products.service";
import { IProduct } from "../../model/product";
import { CartService } from "../../services/cart.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public productList: Array<IProduct>;
    private sub;
    constructor(
        private productService: ProductService,
        private cartService: CartService,
        private router: Router
    ) { }

    ngOnInit() {
        this.load();
    }
    load = () => {
        this.sub = this.productService.getProductList('./assets/mock-data/product-list.json')
            .subscribe(res => {
                this.productList = res.Result;
            })
    };
    addToCart = (product) => {
        this.cartService.addToCart({ product, Quantity: 1 })
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    changeQuantity = (cart, quantity) => {
        debugger;

        cart.Quantity = quantity;

        // this.cartService.reloadCart(this.cartList);
    }
    cartQuantity(product: IProduct) {
        return this.cartService.getQuantity(product);
    }
}
