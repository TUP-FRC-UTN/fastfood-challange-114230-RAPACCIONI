import { Component } from '@angular/core';
import { POSComponent } from "../pos/pos.component";
import { KitchenComponent } from "../kitchen/kitchen.component";
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [POSComponent, KitchenComponent, DeliveryPointComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

}
