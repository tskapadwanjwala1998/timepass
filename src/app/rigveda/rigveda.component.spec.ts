import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigvedaComponent } from './rigveda.component';

describe('RigvedaComponent', () => {
  let component: RigvedaComponent;
  let fixture: ComponentFixture<RigvedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigvedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigvedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
