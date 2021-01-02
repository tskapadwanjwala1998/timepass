import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinjewadiComponent } from './hinjewadi.component';

describe('HinjewadiComponent', () => {
  let component: HinjewadiComponent;
  let fixture: ComponentFixture<HinjewadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinjewadiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HinjewadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
