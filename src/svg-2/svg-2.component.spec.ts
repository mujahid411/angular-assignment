import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svg2Component } from './svg-2.component';

describe('Svg2Component', () => {
  let component: Svg2Component;
  let fixture: ComponentFixture<Svg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Svg2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Svg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
