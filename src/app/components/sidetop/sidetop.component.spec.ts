import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidetopComponent } from './sidetop.component';

describe('SidetopComponent', () => {
  let component: SidetopComponent;
  let fixture: ComponentFixture<SidetopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidetopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidetopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
