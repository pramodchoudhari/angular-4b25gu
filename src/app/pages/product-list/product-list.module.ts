/**
 * Created by andrew.yang on 7/27/2017.
 */
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { productListRoutes } from "./product-list.routes";
import { SharedModule } from "../../shared/shared.module";
import { ProductListComponent } from "./product-list.component";
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productListRoutes)
    ],
    declarations: [
        ProductListComponent
    ]
})
export class ProductListModule { }