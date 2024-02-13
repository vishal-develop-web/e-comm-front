import { Component } from '@angular/core'
import {
  MatSelect,
  MatSelectChange,
  MatSelectModule
} from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'

import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  selectedVal = 'Top Products'
  selected = 'option1'

  handleSelectChange (event: MatSelectChange) {
    console.log(event, 'event')
    this.selectedVal = event.source.triggerValue
  }
}
