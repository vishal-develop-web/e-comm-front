import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from '../user-app/pages/home/home.component'
import { CartComponent } from '../user-app/pages/cart/cart.component'
import { ProfileComponent } from '../user-app/pages/profile/profile.component'
import { SupportComponent } from '../user-app/pages/support/support.component'
import { OrderComponent } from '../user-app/pages/order/order.component'
import { SettingComponent } from '../../admin-dashboard/admin-app/pages/setting/setting.component'
import { WishlistComponent } from '../user-app/pages/wishlist/wishlist.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutesModule {}
