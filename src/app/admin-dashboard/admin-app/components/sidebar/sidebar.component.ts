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
  isLinkActive: boolean = false

  toggleSidebar () {
    this.visibleSidebar = !this.visibleSidebar
  }
  items = [1, 2, 3, 4]
  sideBarLinks = [
    {
      path: './dashboard',
      icon: 'fa-brands fa-dashcube',
      title: 'Dashboard'
    },
    {
      path: './order',
      icon: 'fa-solid fa-bag-shopping',
      title: 'Orders',
      showSublink: false,
      sidebarSublinks: [
        {
          path: './order/pending',
          title: 'Pending'
        },
        {
          path: './order/completed',
          title: 'Completed'
        },
        {
          path: './order/cancel',
          title: 'Canceled'
        }
      ]
    },
    {
      path: './product',
      icon: 'fa-solid fa-circle',
      title: 'Products',
      showSublink: false,
      sidebarSublinks: [
        {
          path: './product/top-product',
          title: 'Top Products'
        },
        {
          path: './product/product-grid',
          title: 'Products Grid'
        },
        {
          path: './product/product-management',
          title: 'Product Management'
        },
        {
          path: './product/product-management',
          title: 'Product Management'
        },
        {
          path: './product/banner',
          title: 'Banners'
        }
      ]
    },
    {
      path: './sales-info',
      icon: 'fa-solid fa-circle',
      title: 'Sales Information'
    },
    {
      path: './transactions',
      icon: 'fa-solid fa-sack-dollar',
      title: 'Transactions'
    },
    {
      path: './customers',
      icon: 'fa-solid fa-circle',
      title: 'Customers'
    },
    {
      path: './invoice',
      icon: 'fa-solid fa-clipboard',
      title: 'Invoices'
    },
    {
      path: './setting',
      icon: 'fa-solid fa-gear',
      title: 'Settings'
    },
    {
      path: './profile',
      icon: 'fa-solid fa-user',
      title: 'Profile'
    }
  ]

  handleLink (link: any) {
    console.log('click')

    this.isLinkActive = !this.isLinkActive
    link.showSublink = !link.showSublink
  }
}
