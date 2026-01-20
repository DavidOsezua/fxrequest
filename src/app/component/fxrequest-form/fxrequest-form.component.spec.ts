import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxrequestFormComponent } from './fxrequest-form.component';

describe('FxrequestFormComponent', () => {
  let component: FxrequestFormComponent;
  let fixture: ComponentFixture<FxrequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FxrequestFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FxrequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
