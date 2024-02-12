import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from '../admin-app/pages/admin-dashboard/admin-dashboard.component'
import { CustomerComponent } from '../admin-app/pages/customer/customer.component'
import { ProductsComponent } from '../admin-app/pages/products/products.component'
import { InvoicesComponent } from '../admin-app/pages/invoices/invoices.component'
import { SettingComponent } from '../admin-app/pages/setting/setting.component'
import { ProfileComponent } from '../admin-app/pages/profile/profile.component'
import { OrderdetailComponent } from '../admin-app/pages/orderdetail/orderdetail.component'
import { SalesinfoComponent } from '../admin-app/pages/salesinfo/salesinfo.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'product',
    component: ProductsComponent
  },
  {
    path: 'invoice',
    component: InvoicesComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'order',
    component: OrderdetailComponent
  },
  {
    path: 'salesinfo',
    component: SalesinfoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutesModule {}
