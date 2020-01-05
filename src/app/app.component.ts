import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { TestePage } from '../pages/teste/teste';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TestePage;
  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      statusBar.styleDefault();
    });
  }
}
