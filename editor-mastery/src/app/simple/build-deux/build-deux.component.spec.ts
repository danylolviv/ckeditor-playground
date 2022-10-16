import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildDeuxComponent } from './build-deux.component';

describe('BuildDeuxComponent', () => {
  let component: BuildDeuxComponent;
  let fixture: ComponentFixture<BuildDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildDeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
