import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { checkoutRoutes } from './checkout.routes';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(checkoutRoutes)
  ],
  declarations: [
    CheckoutComponent
  ]
})
export class CheckoutPageModule { }
