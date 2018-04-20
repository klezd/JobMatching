import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityPage } from './activity';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityPage),
    ComponentsModule
  ],
  exports: [
    ActivityPage,
  ]
})
export class ActivityPageModule {}
