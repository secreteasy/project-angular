import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root, app-header',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
