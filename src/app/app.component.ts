import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopBannerComponent} from "./Components/top-banner/top-banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webParser';
}
