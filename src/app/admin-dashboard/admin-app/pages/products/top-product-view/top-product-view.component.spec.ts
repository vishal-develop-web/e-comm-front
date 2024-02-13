import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductViewComponent } from './top-product-view.component';

describe('TopProductViewComponent', () => {
  let component: TopProductViewComponent;
  let fixture: ComponentFixture<TopProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopProductViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
