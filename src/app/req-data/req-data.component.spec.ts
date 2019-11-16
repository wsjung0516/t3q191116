import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqDataComponent } from './req-data.component';

describe('ReqDataComponent', () => {
  let component: ReqDataComponent;
  let fixture: ComponentFixture<ReqDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
