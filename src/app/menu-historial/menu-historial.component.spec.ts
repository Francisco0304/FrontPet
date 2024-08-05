import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHistorialComponent } from './menu-historial.component';

describe('MenuHistorialComponent', () => {
  let component: MenuHistorialComponent;
  let fixture: ComponentFixture<MenuHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuHistorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
