import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVentasComponent } from './app-ventas.component';

describe('AppVentasComponent', () => {
  let component: AppVentasComponent;
  let fixture: ComponentFixture<AppVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppVentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
