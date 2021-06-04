import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozyButtonComponent } from './cozy-button.component';

describe('CozyButtonComponent', () => {
  let component: CozyButtonComponent;
  let fixture: ComponentFixture<CozyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CozyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
