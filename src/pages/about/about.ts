import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as Enums from '../../enumerable/enumerables';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  public enums = Enums;

  constructor(private navCtrl: NavController) { }

  voltar(){
    this.navCtrl.setRoot(HomePage);
  }

  sendMail(){
    let Link="mailto:suportedev.jn@gmail.com?subject=DirectZapp%20contato";
    window.open(Link, "_system");    
  }

  goGitHub(){
    let Link="https://github.com/djeico";
    window.open(Link, "_system");    
  }

  goLinkedin(){
    let Link="https://www.linkedin.com/in/jaquisson-nunes/";
    window.open(Link, "_system");    
  }

}