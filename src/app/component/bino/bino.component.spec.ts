import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinoComponent } from './bino.component';

describe('BinoComponent', () => {
  let component: BinoComponent;
  let fixture: ComponentFixture<BinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
