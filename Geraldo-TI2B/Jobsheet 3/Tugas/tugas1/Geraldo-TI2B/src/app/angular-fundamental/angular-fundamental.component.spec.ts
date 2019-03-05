import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFundamentalComponent } from './angular-fundamental.component';

describe('AngularFundamentalComponent', () => {
  let component: AngularFundamentalComponent;
  let fixture: ComponentFixture<AngularFundamentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFundamentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFundamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
