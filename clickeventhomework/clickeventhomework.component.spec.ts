import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickeventhomeworkComponent } from './clickeventhomework.component';

describe('ClickeventhomeworkComponent', () => {
  let component: ClickeventhomeworkComponent;
  let fixture: ComponentFixture<ClickeventhomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickeventhomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickeventhomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
