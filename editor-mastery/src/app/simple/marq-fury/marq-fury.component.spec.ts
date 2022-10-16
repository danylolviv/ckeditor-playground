import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqFuryComponent } from './marq-fury.component';

describe('MarqFuryComponent', () => {
  let component: MarqFuryComponent;
  let fixture: ComponentFixture<MarqFuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqFuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqFuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
