import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyActivityPage } from './apply-activity';

@NgModule({
  declarations: [
    ApplyActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyActivityPage),
  ],
  exports: [
    ApplyActivityPage
  ]
})
export class ApplyActivityPageModule {}
