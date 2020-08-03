import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookHomeComponent } from './phone-book-home.component';

describe('PhoneBookHomeComponent', () => {
  let component: PhoneBookHomeComponent;
  let fixture: ComponentFixture<PhoneBookHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBookHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
