import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as Enums from '../../enumerable/enumerables';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [
    SocialSharing
  ]
})
export class AboutPage {

  public enums = Enums;
  private _ANDROID_APPLINK = 'https://play.google.com/store/apps/details?id=br.com.jaquisson.directzapp';
  private _PWA_APPLINK = 'https://directzapp.web.app/';

  constructor(private navCtrl: NavController, private platform: Platform, private iab: InAppBrowser,
    private socialSharing: SocialSharing, private toast: ToastController) { }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }

  sendMail() {
    let Link = "mailto:suportedev.jn@gmail.com?subject=DirectZapp%20contato";
    window.open(Link, "_system");
  }

  goGitHub() {
    let Link = "https://github.com/djeico";
    window.open(Link, "_system");
  }

  goLinkedin() {
    let Link = "https://www.linkedin.com/in/jaquisson-nunes/";
    window.open(Link, "_system");
  }

  public goShareApp() {
    let thispage = this;
    this.platform.ready().then(() => {

      let header = '\nQue legal!\nVocê foi convidado para utilizar o app *_DirectZapp_*!';
      let msg_android = '\n\nBaixe o aplicativo na loja do Google se tiver um smartphone com *Android:*\n';
      let msg_pwa = '\n\nOu utilize o *PWA* se tiver Smartphone da *Apple:*\n';
      let android = this._ANDROID_APPLINK;
      let pwa = this._PWA_APPLINK;
      let message = `${header}${msg_android}${android}${msg_pwa}${pwa}`;

      let view = null;

      if (this.platform.is('mobileweb') || this.platform.is('core')) {
        view = "browser";
      } else {
        view = "device";
      }

      /*
      let system = null;
      if (this.platform.is('ios')) {
        system = "iOS";
      } else if (this.platform.is('android')) {
        system = "Android";
      } else if (this.platform.is('windows')) {
        system = "Windows";
      }
      */

      if (view == 'browser') {
        thispage.shareWeb(message);
      } else if (view == 'device') {
        thispage.shareDevice(message);
      }
    });
  }

  shareWeb(message) {
    try {
      let text = encodeURI(message);
      let url = `https://wa.me/?text=${text}`;
      const browser = this.iab.create(url);
      browser.show();
    } catch (error) {
      this.showMessage('Erro ao realizar o compartilhamento.');
    }
  }

  shareDevice(message) {
    let thispage = this;
    this.socialSharing.shareViaWhatsApp(message, null, null).catch(() => {
      thispage.showMessage('Erro ao realizar o compartilhamento.');
    });
  }

  showMessage(message) {
    const toast = this.toast.create({
      message: message,
      closeButtonText: 'ok',
      showCloseButton: true,
      duration: 10000
    });
    toast.present();
  }

}
