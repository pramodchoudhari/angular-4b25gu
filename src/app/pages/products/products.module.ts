/**
 * Created by andrew.yang on 7/27/2017.
 */
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { productsRoutes } from "./products.routes";
import { SharedModule } from "../../shared/shared.module";
import { ProductsComponent } from "./products.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productsRoutes)
    ],
    declarations: [
        ProductsComponent
    ]
})
export class ProductsModule { }