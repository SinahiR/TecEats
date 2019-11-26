import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripciontortasComponent } from './descripciontortas.component';

describe('DescripciontortasComponent', () => {
  let component: DescripciontortasComponent;
  let fixture: ComponentFixture<DescripciontortasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripciontortasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripciontortasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
