import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeModalComponent } from './customize-modal.component';

describe('CustomizeModalComponent', () => {
  let component: CustomizeModalComponent;
  let fixture: ComponentFixture<CustomizeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
