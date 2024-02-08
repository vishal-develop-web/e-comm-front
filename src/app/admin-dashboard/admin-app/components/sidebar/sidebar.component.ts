import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  visibleSidebar: boolean = true

  toggleSidebar () {
    this.visibleSidebar = !this.visibleSidebar
  }
}
