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
  public currencyList;
  public model = { name: "Brasil", dial_code: "+55", code: "BR" };
  public selectOptions;

  public destinatarioForm: any;
  public ddd = null;
  public numero = null;
  public enums = Enums;

  constructor(public alertController: AlertController, private iaBrowser: InAppBrowser, platform: Platform, public navCtrl: NavController, public formBuilder: FormBuilder, public viewCtrl: ViewController) {

    this.currencyList = BandeiraRepository.getBandeiras();
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

  dismiss() {
    let telefone = null;
    try {
      telefone = { ddi: this.model.dial_code.replace('+', ''), ddd: this.ddd, numero: this.numero };
      this.goShareOne(telefone);
    } catch (error) {
      telefone = null;
    }
  }

  setFocusTel() {
    this.inputTel.setFocus();
  }

  setFocusDDD() {
    this.inputDDD.setFocus();
  }

  onChangeDDD(event) {
    if (event.blur) {
      this.validaFormD();
      if (String(event.value).length == 2) {
        let num = String(event.value).substring(0, 2);
        this.ddd = parseInt(num);
        this.setFocusTel();
        return false;
      }
    }
  }

  onChangeNumero(event) {
    if (event.blur) {
      this.validaFormN();
      if (String(event.value).length == 9) {
        let num = String(event.value).substring(0, 9);
        this.numero = parseInt(num);
        return false;
      }
    }
  }

  isDDI() {
    return String(this.model.dial_code).length > 0 && String(this.model.dial_code).length <= 4;
  }

  isDDD() {
    return String(this.destinatarioForm.value.ddd).length == 2;
  }

  isNumero() {
    return String(this.destinatarioForm.value.numero).length == 9;
  }

  validaFormN() {
    return String(this.destinatarioForm.value.numero).length != 9;
  }

  validaFormD() {
    return String(this.destinatarioForm.value.ddd).length != 2;
  }

  goShareOne(data) {
    let fone = encodeURI(`${data.ddi}${data.ddd}${data.numero}`);
    let _TARGET = "_system"; //openWithSystemBrowser [ANDROID OK]
    //let _TARGET = "_blank"; //openWithInAppBrowser
    //let _TARGET = "_self"; //openWithCordovaBrowser

    try {
      let text = encodeURI('');
      let url = `https://wa.me/${fone}?text=${text}`;

      //let url = `whatsapp://send?text=t`;

      const browser = this.iaBrowser.create(url, _TARGET, {
        location: "no",
        clearcache: "yes",
        clearsessioncache: "yes",
        toolbar: "no"
      });
      browser.on("loadstop").subscribe(event => {
        browser.executeScript({ code: "document.cookie;" }).then(cookie => {
          console.log("Cookie: ", cookie);
        });
      });
    } catch (error) {
      console.log("goShare Error: ", error);
    }
  }

  onChange($event) {
    let indexes = this.currencyList.map(function (obj, index) {
      if (obj.code == $event) { return index; }
    }).filter(isFinite)
    this.model = this.currencyList[indexes[0]];
    console.log(this.model);
  }

  openSelect() {
    this.selectRef.open();
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
