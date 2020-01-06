export class PaisModel {
  pais_name: string;
  pais_code: string;
  pais_dial_code: string;

  constructor(name:string, code:string, dial_code:string) {
      this.pais_name = name;
      this.pais_code = code;
      this.pais_dial_code = dial_code;
  }

  public getPais_name():String {
    return this.pais_name;
  }

	public setPais_Name(pais_name: string) {
    this.pais_name = pais_name;
  }

  public getPais_Code():String {
    return this.pais_code;
  }

	public setPais_Code(pais_code: string) {
    this.pais_code = pais_code;
  }

  public getPais_Dial_Code():String {
    return this.pais_dial_code;
  }

	public setPais_Dial_Code(pais_dial_code: string) {
    this.pais_dial_code = pais_dial_code;
  }




}
