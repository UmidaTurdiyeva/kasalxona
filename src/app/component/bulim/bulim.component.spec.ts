import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulimComponent } from './bulim.component';

describe('BulimComponent', () => {
  let component: BulimComponent;
  let fixture: ComponentFixture<BulimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
