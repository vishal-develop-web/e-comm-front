import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  @ViewChild('nextButton') nextButton: ElementRef | undefined
  @ViewChild('prevButton') prevButton!: ElementRef

  userCarouselClicked: boolean = false

  nextSlide () {
    this.nextButton?.nativeElement.click()
  }

  frequentCall () {
    setInterval(() => {
      if (!this.userCarouselClicked) {
        this.nextSlide()
      }
    }, 2000)
  }

  prevClick () {
    this.userCarouselClicked = true
    setTimeout(() => {
      this.userCarouselClicked = false
    }, 10000)
  }

  ngOnInit () {}
}
