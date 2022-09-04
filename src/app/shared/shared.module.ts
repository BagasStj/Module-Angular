import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodPickerComponent } from './componens/period-picker/period-picker.component';
import { NsTreePickerComponent } from './componens/ns-tree-picker/ns-tree-picker.component';
import { MaterialModule } from './material.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

const MODULES = [NzButtonModule, NzDatePickerModule]; // fillers wkwkw
const COMPONENTS = [
  PeriodPickerComponent,
  NsTreePickerComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MODULES
  ],
  exports: [COMPONENTS, MODULES]
})
export class SharedModule { }
