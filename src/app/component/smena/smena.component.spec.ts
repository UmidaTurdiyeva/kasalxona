import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmenaComponent } from './smena.component';

describe('SmenaComponent', () => {
  let component: SmenaComponent;
  let fixture: ComponentFixture<SmenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
