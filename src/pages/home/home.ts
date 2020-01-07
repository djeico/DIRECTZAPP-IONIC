import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, AlertController, Select } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HomeRules } from '../../rules/home';
import { BandeiraModel } from '../../model/bandeira';
import { BandeiraRepository } from '../../repository/bandeira';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('_ddi') selectRef: Select;
  @ViewChild('_tel') inputTel;
  @ViewChild('_ddd') inputDDD;

  private selectOptions;
  private currencyList;
  private model:BandeiraModel;// = { name: "Brasil", dial_code: "+55", code: "BR" };

  private addUserForm: any;
  private ddd = null;
  private numero = null;
  private platform = null;

  constructor(public alertController: AlertController, private iab: InAppBrowser, platform: Platform, public navCtrl: NavController, public formBuilder: FormBuilder, public viewCtrl: ViewController) {
    this.currencyList = BandeiraRepository.getBandeiras();
    this.model = this.currencyList[0];
    this.selectOptions = { cssClass: "course-popover" };
    this.platform = platform;

    this.addUserForm = this.formBuilder.group({
      ddd: [this.ddd, Validators.compose([Validators.maxLength(2), Validators.minLength(2), Validators.required])],
      numero: [this.numero, Validators.compose([Validators.maxLength(9), Validators.minLength(9), Validators.required])],
    });

  }

  ionViewDidEnter(){
    setTimeout(() => { this.inputDDD.setFocus(); }, 1000);
  }

  async about(){
    const alert = await this.alertController.create({
      title: 'DirectZapp v.1.0.4',
      message: 'DirectZapp é um aplicativo gratuito e sem propagandas.\n Desenvolvido por Jaquisson Nunes',
      buttons: ['Fechar']
    });

    await alert.present();
  }

  dismiss(btn: boolean = true) {
    let fone = null;
    try {
      fone = btn ? { ddi: this.model.dial_code.replace('+',''), ddd: this.ddd, numero: this.numero } : null;
      this.goShareOne(fone);
    } catch (error) {
      fone = null;
    }
  }

  setFocusTel(){
    this.inputTel.setFocus();
  }

  setFocusDDD(){
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
    return String(this.addUserForm.value.ddd).length == 2;
  }

  isNumero() {
    return String(this.addUserForm.value.numero).length == 9;
  }

  validaFormN() {
    return String(this.addUserForm.value.numero).length != 9;
  }

  validaFormD() {
    return String(this.addUserForm.value.ddd).length != 2;
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

      const browser = this.iab.create(url, _TARGET, {
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
    console.log($event);
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

}
