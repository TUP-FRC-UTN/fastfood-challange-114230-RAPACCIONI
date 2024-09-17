import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {

  name: string = '';
  description: string = '';

  // injectamos el servicio
   constructor(private orderService: OrderService) {}

  addOrder() {

    // usamos el contructor de la clase Order
    const newOrder = new Order(this.name, this.description);

    // agreggo el pedido a traves del servicio
    this.orderService.addOrder(newOrder);

    // reseteamos los campos
    this.name = '';
    this.description = '';
    
  }


}
