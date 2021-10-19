import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderightComponent } from './sideright.component';

describe('SiderightComponent', () => {
  let component: SiderightComponent;
  let fixture: ComponentFixture<SiderightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
