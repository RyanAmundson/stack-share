import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavItemComponent } from './main-nav-item.component';

describe('MainNavItemComponent', () => {
  let component: MainNavItemComponent;
  let fixture: ComponentFixture<MainNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
