import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListComponent } from './prod-list.component';
import { ProdServiceService } from '../prod-service.service';
import { AppModule } from '../app.module';

describe('ProdListComponent', () => {
  let component: ProdListComponent;
  let fixture: ComponentFixture<ProdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedProdIndex when showProduct is called', () => {
    const index = 1;
    component.showProduct(index);
    expect(component.selectedProdIndex).toEqual(index);
  });

});


