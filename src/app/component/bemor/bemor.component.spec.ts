import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemorComponent } from './bemor.component';

describe('BemorComponent', () => {
  let component: BemorComponent;
  let fixture: ComponentFixture<BemorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BemorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
