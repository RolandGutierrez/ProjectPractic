import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerCompComponent } from './primer-comp.component';

describe('PrimerCompComponent', () => {
  let component: PrimerCompComponent;
  let fixture: ComponentFixture<PrimerCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerCompComponent]
    });
    fixture = TestBed.createComponent(PrimerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
