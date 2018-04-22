import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditResumePage } from './edit-resume';

@NgModule({
  declarations: [
    EditResumePage,
  ],
  imports: [
    IonicPageModule.forChild(EditResumePage),
  ],
})
export class EditResumePageModule {}
