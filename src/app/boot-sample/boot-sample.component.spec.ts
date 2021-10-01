import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootSampleComponent } from './boot-sample.component';

describe('BootSampleComponent', () => {
  let component: BootSampleComponent;
  let fixture: ComponentFixture<BootSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
