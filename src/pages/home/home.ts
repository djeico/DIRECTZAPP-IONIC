import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController, Select, PopoverController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { HomeRules } from '../../rules/home';
import { BandeiraRepository } from '../../repository/bandeira';
import { BandeiraModel } from '../../model/bandeira';
import * as Enums from '../../enumerable/enumerables';
import { PopoverPage } from '../popover/popover';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('_ddi') selectRef: Select;
  @ViewChild('_tel') inputTel;
  @ViewChild('_ddd') inputDDD;

  public bandeiras: Array<BandeiraModel>;
  public model: BandeiraModel = new BandeiraModel("Brasil", "+55", "BR");
  public selectOptions;
  public regras = HomeRules;
  public destinatarioForm: any;
  public enums = Enums;

  public ddd = null;
  public numero = null;

  constructor(
    private iaBrowser: InAppBrowser, 
    public popoverCtrl: PopoverController, 
    public alertController: AlertController, 
    public navCtrl: NavController, 
    public formBuilder: FormBuilder, 
    public viewCtrl: ViewController) {

    this.bandeiras = BandeiraRepository.getBandeiras() as Array<BandeiraModel>;
    this.selectOptions = { cssClass: "course-popover" };

    this.destinatarioForm = this.formBuilder.group({
      ddd: [this.ddd, Validators.compose([Validators.maxLength(2), Validators.minLength(2), Validators.required])],
      numero: [this.numero, Validators.compose([Validators.maxLength(9), Validators.minLength(9), Validators.required])],
    });

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidEnter() {
    setTimeout(() => { this.inputDDD.setFocus(); }, 1000);
  }

  onChangeDDI($event) {
    let indices = this.bandeiras.map(function (obj, index) {
      if (obj.code == $event) { return index; }
    }).filter(isFinite)
    this.model = this.bandeiras[indices[0]];
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

  setFocusTel() {
    this.inputTel.setFocus();
  }

  setFocusDDD() {
    this.inputDDD.setFocus();
  }

  openSelect() {
    this.selectRef.open();
  }

  goMessage() {
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

  goShareOne(data) {

      let fone = encodeURI(`${data.ddi}${data.ddd}${data.numero}`);
      let _TARGET = "_system";
      
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

  about() {
    this.navCtrl.setRoot(AboutPage);
  }    

}
