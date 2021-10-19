import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulStoriesComponent } from './successful-stories.component';

describe('SuccessfulStoriesComponent', () => {
  let component: SuccessfulStoriesComponent;
  let fixture: ComponentFixture<SuccessfulStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
