import { FoneModel } from "../model/fone";
import { FormControl } from "@angular/forms";

export class HomeRules {

  public static isDDI(fone:FoneModel):Boolean {
    return String(fone.getPais().getPais_Dial_Code).length > 0 &&
            String(fone.getPais().getPais_Dial_Code).length <= 4;
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
