import { Component } from '@angular/core'
import { CarouselComponent } from '../../components/carousel/carousel.component'
import { CategoryFilterComponent } from '../../components/category-filter/category-filter.component'
import { ProductcardComponent } from '../../components/productcard/productcard.component'
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    CategoryFilterComponent,
    ProductcardComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
