import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMascotasComponent } from './menu-mascotas.component';

describe('MenuMascotasComponent', () => {
  let component: MenuMascotasComponent;
  let fixture: ComponentFixture<MenuMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMascotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
