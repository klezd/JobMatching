import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { AddactivityComponent } from './addactivity/addactivity';
import { SearchBarComponent } from './search-bar/search-bar';

@NgModule({
	declarations: [AddactivityComponent,
    SearchBarComponent],
	imports: [IonicModule],
	exports: [AddactivityComponent,
    SearchBarComponent]
})
export class ComponentsModule {}
