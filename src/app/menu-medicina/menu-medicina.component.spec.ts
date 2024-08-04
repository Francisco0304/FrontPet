import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMedicinaComponent } from './menu-medicina.component';

describe('MenuMedicinaComponent', () => {
  let component: MenuMedicinaComponent;
  let fixture: ComponentFixture<MenuMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMedicinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
