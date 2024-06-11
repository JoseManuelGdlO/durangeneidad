import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './modules/home/services/api.service';
import { ConfigService } from './shared/utils/configuraciones.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'durangeneidad';
  constructor(private configService: ConfigService) {
    this.configService.init()
  }

}
