import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubauxiliarComponent } from './subauxiliar.component';

describe('SubauxiliarComponent', () => {
  let component: SubauxiliarComponent;
  let fixture: ComponentFixture<SubauxiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubauxiliarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubauxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
