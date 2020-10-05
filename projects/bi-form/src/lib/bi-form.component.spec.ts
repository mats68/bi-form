import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiFormComponent } from './bi-form.component';

describe('BiFormComponent', () => {
  let component: BiFormComponent;
  let fixture: ComponentFixture<BiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
