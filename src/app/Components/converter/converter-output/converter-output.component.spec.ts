import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterOutputComponent } from './converter-output.component';

describe('ConverterOutputComponent', () => {
  let component: ConverterOutputComponent;
  let fixture: ComponentFixture<ConverterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverterOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConverterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
