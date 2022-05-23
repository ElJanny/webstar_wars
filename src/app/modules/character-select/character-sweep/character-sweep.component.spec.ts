import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSweepComponent } from './character-sweep.component';

describe('CharacterSweepComponent', () => {
  let component: CharacterSweepComponent;
  let fixture: ComponentFixture<CharacterSweepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSweepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
