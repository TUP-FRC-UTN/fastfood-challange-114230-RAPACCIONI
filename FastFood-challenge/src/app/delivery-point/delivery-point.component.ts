import { Component, inject } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  readyOrders: Order[] = []; // lista de pedidos terminados

  private orderService = inject(OrderService);

  constructor(){
    this.readyOrders = this.orderService.readyOrders;
  }

  // elimina el pedido de la lista de listos
  deliverOrder(order: Order){
    this.orderService.deliverOrder(order);
  }


}
