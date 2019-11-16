import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResDataComponent } from './res-data.component';

describe('ResDataComponent', () => {
  let component: ResDataComponent;
  let fixture: ComponentFixture<ResDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
