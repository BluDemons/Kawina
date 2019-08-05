import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadmiComponent } from './loginadmi.component';

describe('LoginadmiComponent', () => {
  let component: LoginadmiComponent;
  let fixture: ComponentFixture<LoginadmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginadmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginadmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
