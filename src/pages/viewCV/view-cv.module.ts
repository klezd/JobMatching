import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCV } from './view-cv';

@NgModule({
  declarations: [
    ViewCV,
  ],
  imports: [
    IonicPageModule.forChild(ViewCV),
  ],
  exports: [
    ViewCV
  ],
})
export class ViewCvPageModule {}
