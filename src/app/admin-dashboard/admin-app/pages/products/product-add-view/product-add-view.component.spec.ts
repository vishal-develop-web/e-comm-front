import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddViewComponent } from './product-add-view.component';

describe('ProductAddViewComponent', () => {
  let component: ProductAddViewComponent;
  let fixture: ComponentFixture<ProductAddViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
