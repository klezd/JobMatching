import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppliedInfoPage } from './applied-info';

@NgModule({
  declarations: [
    AppliedInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AppliedInfoPage),
  ],
  exports: [
    AppliedInfoPage,
  ]
})
export class AppliedInfoPageModule {}
