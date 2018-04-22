import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchJob } from './search-job';

@NgModule({
  declarations: [
    SearchJob,
  ],
  imports: [
    IonicPageModule.forChild(SearchJob),
  ],
  exports: [
    SearchJob
  ]
})
export class SearchPageModule {}
