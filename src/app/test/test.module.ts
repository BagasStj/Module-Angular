import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';
import { TestComponent } from './test.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
// import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [TestComponent,],
  imports: [
    TestRoutingModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ]
})
export class TestModule {
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
  
    //ad icon
    // for (const icon in SvgIcons) {
    //   this.matIconRegistry.addSvgIcon(
    //     (SvgIcons as any)[icon].name,
    //     this.domSanitizer.bypassSecurityTrustResourceUrl((SvgIcons as any)[icon].url)
    //   );
    // }
  }
  
  
 }
