import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutesRoutingModule } from './user-routes-routing.module'
import { Routes, RouterModule } from '@angular/router'
import { UserDashboardComponent } from '../user-app/pages/user-dashboard/user-dashboard.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: UserDashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, UserRoutesRoutingModule],
  exports: [RouterModule]
})
export class UserRoutesModule {}
