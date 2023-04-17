import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranciseComponent } from './francise.component';

describe('FranciseComponent', () => {
  let component: FranciseComponent;
  let fixture: ComponentFixture<FranciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
