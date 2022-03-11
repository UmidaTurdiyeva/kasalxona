import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavozimComponent } from './lavozim.component';

describe('LavozimComponent', () => {
  let component: LavozimComponent;
  let fixture: ComponentFixture<LavozimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavozimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LavozimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
