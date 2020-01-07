export class BandeiraModel {
  public bandeira_name: string;
  public bandeira_dial_code: string;
  public bandeira_code: string;

  constructor(name:string, dial:string, code:string){
    this.bandeira_name = name;
    this.bandeira_dial_code = dial;
    this.bandeira_code = code;
  }
}
