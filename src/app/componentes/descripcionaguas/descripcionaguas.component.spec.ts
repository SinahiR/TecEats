import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionaguasComponent } from './descripcionaguas.component';

describe('DescripcionaguasComponent', () => {
  let component: DescripcionaguasComponent;
  let fixture: ComponentFixture<DescripcionaguasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionaguasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionaguasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
