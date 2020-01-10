import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, AlertController, Select } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HomeRules } from '../../rules/home';
import { BandeiraRepository } from '../../repository/bandeira';
import * as Enums from '../../enumerable/enumerables';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('_ddi') selectRef: Select;
  @ViewChild('_tel') inputTel;
  @ViewChild('_ddd') inputDDD;

  public platform = null;
  public bandeiras;
  public model = { name: "Brasil", dial_code: "+55", code: "BR" };
  public selectOptions;
  public regras = HomeRules;
  public destinatarioForm: any;
  public ddd = null;
  public numero = null;
  public enums = Enums;

  public error = null;

  constructor(public alertController: AlertController, private iaBrowser: InAppBrowser, platform: Platform, public navCtrl: NavController, public formBuilder: FormBuilder, public viewCtrl: ViewController) {

    this.bandeiras = BandeiraRepository.getBandeiras();
    this.selectOptions = { cssClass: "course-popover" };
    this.platform = platform;

    this.destinatarioForm = this.formBuilder.group({
      ddd: [this.ddd, Validators.compose([Validators.maxLength(2), Validators.minLength(2), Validators.required])],
      numero: [this.numero, Validators.compose([Validators.maxLength(9), Validators.minLength(9), Validators.required])],
    });

  }

  ionViewDidEnter() {
    setTimeout(() => { this.inputDDD.setFocus(); }, 1000);
  }

  setFocusTel() {
    this.inputTel.setFocus();
  }

  setFocusDDD() {
    this.inputDDD.setFocus();
  }

  onChangeDDD(event) {
    if (event.blur) {
      if(this.regras.isValidoDDD(this.destinatarioForm)){
        let num = String(event.value).substring(0, 2);
        this.ddd = parseInt(num);
        this.setFocusTel();
        return false;
      }
    }
  }

  onChangeNumero(event) {
    if (event.blur) {
      if (this.regras.isValidoNumero(this.destinatarioForm)) {
        let num = String(event.value).substring(0, 9);
        this.numero = parseInt(num);
        return false;
      }
    }
  }

  goShareOne(data) {
    let fone = encodeURI(`${data.ddi}${data.ddd}${data.numero}`);
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
          console.log("Cookie: ", cookie);
          this.error += cookie;
        });
      });

    } catch (error) {
      console.log("goShare Error: ", error);
      this.error += error;
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
  }

  onChangeDDI($event) {
    let indices = this.bandeiras.map(function (obj, index) {
      if (obj.code == $event) { return index; }
    }).filter(isFinite)
    this.model = this.bandeiras[indices[0]];
  }

  openSelect() {
    this.selectRef.open();
  }

  dismiss() {
    let telefone = null;
    try {
      telefone = { ddi: this.model.dial_code.replace('+', ''), ddd: this.ddd, numero: this.numero };
      this.goShareOne(telefone);
    } catch (error) {
      telefone = null;
    }
  }

  limparFormulario(){
    this.ddd = this.numero = null;
    setTimeout(() => { this.inputDDD.setFocus(); }, 500);
  }

  exitApp() {
    this.platform.exitApp();
  }

  async about() {
    const alert = await this.alertController.create({
      title: this.enums.About.ABOUT_TITLE+' ['+this.enums.About.ABOUT_VERSION+']',
      message: this.enums.About.ABOUT_MESSAGE,
      buttons: [this.enums.ElementsText.TEXT_CLOSE_BUTTON]
    });
    await alert.present();
  }

}
