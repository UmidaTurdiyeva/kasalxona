import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XonaComponent } from './xona.component';

describe('XonaComponent', () => {
  let component: XonaComponent;
  let fixture: ComponentFixture<XonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
