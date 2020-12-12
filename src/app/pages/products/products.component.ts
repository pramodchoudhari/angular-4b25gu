import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/products.service";
import { Product } from "../../model/product";
import { CartService } from "../../services/cart.service";

@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    private sub;
    public product: Product;
    quantity: number = 1;
    constructor(private route: ActivatedRoute,
        private productService: ProductService,
        private cartService: CartService
    ) {
        debugger;
    }

    ngOnInit() {
        debugger
        this.route.params
            .subscribe(res => {
                this.getProduct(res.id);
            })
    }
    getProduct = (id) => {
        this.sub = this.productService.getProducts('./assets/mock-data/products.json')
            .subscribe(res => {
                this.product = res[id - 1];
            })
    };
    changeQuantity = (newQuantity: number) => {
        this.quantity = newQuantity;
    };
    addToCart = (product) => {
        if (this.quantity) this.cartService.addToCart({ product, Quantity: this.quantity })
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
