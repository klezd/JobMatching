import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPostsPage } from './view-posts';

@NgModule({
  declarations: [
    ViewPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPostsPage),
  ],
})
export class ViewPostsPageModule {}
