import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingHomeworkComponent } from './class-binding-homework.component';

describe('ClassBindingHomeworkComponent', () => {
  let component: ClassBindingHomeworkComponent;
  let fixture: ComponentFixture<ClassBindingHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBindingHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBindingHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
