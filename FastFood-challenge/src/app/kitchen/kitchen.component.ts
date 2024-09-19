import { Component, inject } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  orders: Order[] = []; // lsita de pedidos pendientes
  cookingOrders: Order[] = []; // lista de pedidos cocinandose

  // injectamos el servicio
  private orderService = inject(OrderService)

  constructor(){
    this.orders = this.orderService.orders;
    this.cookingOrders = this.orderService.cookingOrders;
  }

  // mueve un pedido a la lista de coccion
  cookOrder(order: Order){

    if(this.cookingOrders.includes(order)){
      this.orderService.moveToCooking(order);
    } else{
      alert("Ya hay un pedido en coccion")
    }
  }

  // Mueve un pedido a la lista de listos para entregar
  completeOrder(order: Order){
    this.orderService.moveToReady(order);
  }
}
