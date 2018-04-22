import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMyCVs } from './view-my-CVs';

@NgModule({
  declarations: [
    ViewMyCVs,
  ],
  imports: [
    IonicPageModule.forChild(ViewMyCVs),
  ],
  exports: [
    ViewMyCVs,
  ]
})
export class ViewMyCVsModule {}
