import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsTreePickerComponent } from './ns-tree-picker.component';

describe('NsTreePickerComponent', () => {
  let component: NsTreePickerComponent;
  let fixture: ComponentFixture<NsTreePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsTreePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsTreePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
