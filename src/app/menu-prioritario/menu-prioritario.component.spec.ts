import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrioritarioComponent } from './menu-prioritario.component';

describe('MenuPrioritarioComponent', () => {
  let component: MenuPrioritarioComponent;
  let fixture: ComponentFixture<MenuPrioritarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrioritarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPrioritarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
