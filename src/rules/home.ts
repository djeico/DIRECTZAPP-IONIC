import { FormControl } from "@angular/forms";

export class HomeRules {

  public static isValidoDDI(fone:any):Boolean {
    return String(fone.dial_code).length > 0 &&
            String(fone.dial_code).length <= 4;
  }

  public static isValidoDDD(form: FormControl):Boolean {
    return String(form.value.ddd).length == 2;
  }

  public static isValidoNumero(form: FormControl):Boolean{
    return String(form.value.numero).length == 9;
  }

  public static isValidoFormNumero(form: FormControl):Boolean {
    return String(form.value.numero).length != 9;
  }

  public static isValidoFormDDD(form: FormControl):Boolean{
    return String(form.value.ddd).length != 2;
  }

}
