import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItCardComponent } from './how-it-card.component';

describe('HowItCardComponent', () => {
  let component: HowItCardComponent;
  let fixture: ComponentFixture<HowItCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
