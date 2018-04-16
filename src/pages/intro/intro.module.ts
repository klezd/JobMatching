import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Introduction } from './intro';

@NgModule({
  declarations: [
    Introduction,
  ],
  imports: [
    IonicPageModule.forChild(Introduction),
  ],
})
export class IntroductionModule {}
