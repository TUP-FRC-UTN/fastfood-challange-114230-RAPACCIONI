import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POSComponent } from "./pos/pos.component";
import { FormsModule } from '@angular/forms';
import { RestaurantComponent } from "./restaurant/restaurant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, POSComponent, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastFood-challenge';
}
