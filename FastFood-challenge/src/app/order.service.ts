import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // BehaviorSubjects para mantener los diferentes estados de los pedidos
  private orders = new BehaviorSubject<Order[]>([]); // pedidos pendientes
  private cookingOrders = new BehaviorSubject<Order[]>([]); // pedidos de cocina
  private readyOrders = new BehaviorSubject<Order[]>([]); // pedidos listos para entregar


  // Observable para exponer los pedidos a otros componentes
  orders$ = this.orders.asObservable();
  cookingOrders$ = this.cookingOrders.asObservable();
  readyOrders$ = this.readyOrders.asObservable();

  // Agrega un nuevo pedido a la lista de pedidos pendientes
  addOrder(order: Order){
    this.orders.next([...this.orders.getValue(), order]);
  }

  // Mueve un pedido de la lista de pendientes a la lista de cocción
  moveToCooking(order: Order){
    this.orders.next(this.orders.getValue().filter(o => o !== order));
    this.cookingOrders.next([...this.cookingOrders.getValue(), order]);
  }

  // Mueve un pedido de la lista de cocción a la lista de listos para entregar
  moveToReady(order: Order){
    this.cookingOrders.next(this.cookingOrders.getValue().filter(o => o !== order));
    this.readyOrders.next([...this.readyOrders.getValue(), order]);
  }

  // Elimina un pedido de la lista de listos para entregar (después de entregarlo)
  deliverOrder(order: Order){
    this.readyOrders.next(this.readyOrders.getValue().filter(o => o !== order));
  }

}
