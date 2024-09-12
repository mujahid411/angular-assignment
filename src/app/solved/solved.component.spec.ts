import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvedComponent } from './solved.component';

describe('SolvedComponent', () => {
  let component: SolvedComponent;
  let fixture: ComponentFixture<SolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolvedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
