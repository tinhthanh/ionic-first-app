import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderNumberPage } from './order-number';

@NgModule({
  declarations: [
    OrderNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderNumberPage),
  ],
})
export class OrderNumberPageModule {}
