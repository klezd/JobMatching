import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddnewactivityPage } from './addnewactivity';
import { IonTagsInputModule } from 'ionic-tags-input';

@NgModule({
  declarations: [
    AddnewactivityPage,
  ],
  imports: [
    IonicPageModule.forChild(AddnewactivityPage),
    IonTagsInputModule,
  ],
  exports: [
    AddnewactivityPage
  ]
})
export class AddnewactivityPageModule {}
