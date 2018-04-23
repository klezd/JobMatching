import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosePicPage } from './choose-pic';

@NgModule({
  declarations: [
    ChoosePicPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosePicPage),
  ],
  exports : [
    ChoosePicPage,
  ]
})
export class ChoosePicPageModule {}
