import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = []; // lista de pedidos pendientes
  cookingOrders: Order[] = []; // lista de pedidos de cocina
  readyOrders: Order[] = []; // lista de pedidos listos para entregar


  // Agrega un nuevo pedido a la lista de pedidos pendientes
  addOrder(order: Order){
    this.orders.push(order);
  }

  // Mueve un pedido de la lista de pendientes a la lista de cocción
  moveToCooking(order: Order){
    this.removeFromList(this.orders, order);
    this.cookingOrders.push(order);
  }
  

  // Mueve un pedido de la lista de cocción a la lista de listos para entregar
  moveToReady(order: Order){
    this.removeFromList(this.cookingOrders, order);
    this.readyOrders.push(order);
  }

  // Elimina un pedido de la lista de listos para entregar (después de entregarlo)
  deliverOrder(order: Order){
    this.removeFromList(this.readyOrders, order);
  }

  // elimina un pedido de la lista
  removeFromList(list: Order[], order: Order) {
    const index = list.indexOf(order);
    if(index > -1) {
      list.splice(index, 1)
    }
  }

}
