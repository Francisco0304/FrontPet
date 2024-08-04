import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDuenosComponent } from './menu-duenos.component';

describe('MenuDuenosComponent', () => {
  let component: MenuDuenosComponent;
  let fixture: ComponentFixture<MenuDuenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDuenosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDuenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
