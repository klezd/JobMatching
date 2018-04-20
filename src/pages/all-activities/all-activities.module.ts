import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllActivitiesPage } from './all-activities';

@NgModule({
  declarations: [
    AllActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllActivitiesPage),
  ],
  exports: [
    AllActivitiesPage
  ]
})
export class AllActivitiesPageModule {}
