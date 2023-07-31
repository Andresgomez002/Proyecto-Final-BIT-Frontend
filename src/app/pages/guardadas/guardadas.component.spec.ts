import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardadasComponent } from './guardadas.component';

describe('GuardadasComponent', () => {
  let component: GuardadasComponent;
  let fixture: ComponentFixture<GuardadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardadasComponent]
    });
    fixture = TestBed.createComponent(GuardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
