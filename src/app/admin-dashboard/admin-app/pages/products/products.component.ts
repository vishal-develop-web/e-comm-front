import { Component } from '@angular/core'
import {
  MatSelect,
  MatSelectChange,
  MatSelectModule
} from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'

import { FormsModule } from '@angular/forms'
import { ProductbarchartComponent } from '../../components/productbarchart/productbarchart.component'
import { TopProductViewComponent } from './top-product-view/top-product-view.component'
import { CommonModule } from '@angular/common'
import { GridViewComponent } from './grid-view/grid-view.component'
import { ProductManagementViewComponent } from './product-management-view/product-management-view.component'
import { ProductAddViewComponent } from './product-add-view/product-add-view.component'
import { HomeBannersComponent } from './home-banners/home-banners.component'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ProductbarchartComponent,
    TopProductViewComponent,
    CommonModule,
    GridViewComponent,
    ProductManagementViewComponent,
    ProductAddViewComponent,
    HomeBannersComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  selectedVal = 'Top Products'
  selected = 'option1'
  result = 'option1'

  handleSelectChange (event: MatSelectChange) {
    console.log(event, 'event')
    this.selectedVal = event.source.triggerValue
    this.selected = event.value
  }
}
