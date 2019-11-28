import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripciondonasComponent } from './descripciondonas.component';

describe('DescripciondonasComponent', () => {
  let component: DescripciondonasComponent;
  let fixture: ComponentFixture<DescripciondonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripciondonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripciondonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
