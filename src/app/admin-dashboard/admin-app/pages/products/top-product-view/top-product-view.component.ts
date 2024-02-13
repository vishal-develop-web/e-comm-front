import { Component } from '@angular/core'
import { ProductbarchartComponent } from '../../../components/productbarchart/productbarchart.component'

@Component({
  selector: 'app-top-product-view',
  standalone: true,
  imports: [ProductbarchartComponent],
  templateUrl: './top-product-view.component.html',
  styleUrl: './top-product-view.component.css'
})
export class TopProductViewComponent {}
