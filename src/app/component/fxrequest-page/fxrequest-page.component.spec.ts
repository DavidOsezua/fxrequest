import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxrequestPageComponent } from './fxrequest-page.component';

describe('FxrequestPageComponent', () => {
  let component: FxrequestPageComponent;
  let fixture: ComponentFixture<FxrequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FxrequestPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FxrequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
