import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterInputComponent } from './converter-input.component';

describe('ConverterInputComponent', () => {
  let component: ConverterInputComponent;
  let fixture: ComponentFixture<ConverterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverterInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConverterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
