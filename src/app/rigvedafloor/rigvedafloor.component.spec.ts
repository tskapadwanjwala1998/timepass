import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigvedafloorComponent } from './rigvedafloor.component';

describe('RigvedafloorComponent', () => {
  let component: RigvedafloorComponent;
  let fixture: ComponentFixture<RigvedafloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigvedafloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigvedafloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
