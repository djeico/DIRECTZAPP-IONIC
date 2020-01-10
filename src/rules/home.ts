import { FormControl } from "@angular/forms";

export class HomeRules {

  public static isValidoDDD(form: FormControl):Boolean {
    return String(form.value.ddd).length == 2;
  }

  public static isValidoNumero(form: FormControl):Boolean{
    return String(form.value.numero).length == 9;
  }

}
