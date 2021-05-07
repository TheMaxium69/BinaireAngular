import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebeComponent } from './bebe.component';

describe('BebeComponent', () => {
  let component: BebeComponent;
  let fixture: ComponentFixture<BebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
