import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-user-app',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent {}
