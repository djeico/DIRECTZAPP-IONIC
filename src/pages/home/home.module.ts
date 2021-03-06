import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PopoverPageModule } from '../popover/popover.module';
import { AboutPageModule } from '../about/about.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    PopoverPageModule,
    AboutPageModule
  ],
})
export class HomePageModule {}
