import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseJobPicPage } from './choose-job-pic';

@NgModule({
  declarations: [
    ChooseJobPicPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseJobPicPage),
  ],
})
export class ChooseJobPicPageModule {}
