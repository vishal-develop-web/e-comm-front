import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { UserAppComponent } from './user-dashboard/user-app/user-app.component'
import { AdminAppComponent } from './admin-dashboard/admin-app/admin-app.component'
import { HomepageComponent } from './homepage/homepage.component'

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'user',
    component: UserAppComponent,
    loadChildren: () =>
      import('./user-dashboard/user-routes/user-routes.module').then(
        m => m.UserRoutesModule
      )
  },
  {
    path: 'admin',
    component: AdminAppComponent,
    loadChildren: () =>
      import('./admin-dashboard/admin-routes/admin-routes.module').then(
        m => m.AdminRoutesModule
      )
  }
]
