import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagBannerComponent } from './flag-banner.component';

describe('FlagBannerComponent', () => {
  let component: FlagBannerComponent;
  let fixture: ComponentFixture<FlagBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
