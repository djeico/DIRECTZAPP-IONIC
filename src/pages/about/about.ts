import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as Enums from '../../enumerable/enumerables';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  private data = null;
  public enums = Enums;

  constructor(private iaBrowser: InAppBrowser, private navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data');
    setTimeout(() => { this.goShareOne(); }, 300);
      
  }

  goShareOne() {
    if(this.data){
      let fone = encodeURI(`${this.data.ddi}${this.data.ddd}${this.data.numero}`);
      let _TARGET = "_system"; //openWithSystemBrowser [ANDROID OK]
      //let _TARGET = "_blank"; //openWithInAppBrowser
      //let _TARGET = "_self"; //openWithCordovaBrowser  
      try {
        let text = encodeURI('');
        let url = `https://wa.me/${fone}?text=${text}`; /* outra forma de mmontar a url: `whatsapp://send?text=t`; */
  
        const browser = this.iaBrowser.create(url, _TARGET, {
          location: "no",
          clearcache: "yes",
          clearsessioncache: "yes",
          toolbar: "no"
        });
  
        browser.on("loadstop").subscribe(event => {
          browser.executeScript({ code: "document.cookie;" }).then(cookie => {
            console.log("Cookie: ", cookie+" \nCode: "+event.code);
          });
        });
  
      } catch (error) {
        console.log("goShare Error: ", error);
      }
    }
  }  

  voltar(){
    this.navCtrl.setRoot(HomePage);
  }

  sendMail(){
    let Link="mailto:suportedev.jn@gmail.com?subject=DirectZapp%20contato";
    window.open(Link, "_system");    
  }


}