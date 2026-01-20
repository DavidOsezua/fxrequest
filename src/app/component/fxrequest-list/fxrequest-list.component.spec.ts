import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxrequestListComponent } from './fxrequest-list.component';

describe('FxrequestListComponent', () => {
  let component: FxrequestListComponent;
  let fixture: ComponentFixture<FxrequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FxrequestListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FxrequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
