import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-popover',
  template: `
  <ion-list>
    <ion-list-header>DirectZapp v1.0.7 </ion-list-header>
    <button ion-item (click)="about()"> Sobre </button>
    <button ion-item (click)="close()"> Sair </button>
  </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {}

  async close() {
    await this.viewCtrl.dismiss();
  }

  about() {
    this.close();
    this.navCtrl.setRoot(AboutPage);
  }  
}
