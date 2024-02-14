import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { HeaderComponent } from './components/header/header.component'

@Component({
  selector: 'app-admin-app',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './admin-app.component.html',
  styleUrl: './admin-app.component.css'
})
export class AdminAppComponent {
  showSidebar: boolean = true

  sidebarToggle () {
    this.showSidebar = !this.showSidebar
  }
}
