import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebottomComponent } from './sidebottom.component';

describe('SidebottomComponent', () => {
  let component: SidebottomComponent;
  let fixture: ComponentFixture<SidebottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
