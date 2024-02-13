import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbarchartComponent } from './productbarchart.component';

describe('ProductbarchartComponent', () => {
  let component: ProductbarchartComponent;
  let fixture: ComponentFixture<ProductbarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductbarchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
