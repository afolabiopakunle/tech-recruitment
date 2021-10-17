import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseSellerHubComponent } from './why-choose-seller-hub.component';

describe('WhyChooseSellerHubComponent', () => {
  let component: WhyChooseSellerHubComponent;
  let fixture: ComponentFixture<WhyChooseSellerHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyChooseSellerHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChooseSellerHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
