import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCV } from './create-cv';

@NgModule({
  declarations: [
    CreateCV,
  ],
  imports: [
    IonicPageModule.forChild(CreateCV),
  ],
  exports: [
    CreateCV,
  ],
})
export class CreateCvPageModule {}
