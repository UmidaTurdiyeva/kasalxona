import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XodimComponent } from './xodim.component';

describe('XodimComponent', () => {
  let component: XodimComponent;
  let fixture: ComponentFixture<XodimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XodimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XodimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
