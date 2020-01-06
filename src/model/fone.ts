import { PaisModel } from "./pais";

export class FoneModel {
  private fone_numero: Number;
  private Pais: PaisModel;

  constructor(numero:Number, pais:PaisModel) {
      this.fone_numero = numero;
      this.Pais = pais;
  }

  public getFone_Numero():Number{
    return this.fone_numero;
  }

  public setFone_Numero(numero:Number){
    this.fone_numero = numero;
  }

  public getPais():PaisModel{
    return this.Pais;
  }

  public setPais(pais:PaisModel){
    this.Pais = pais;
  }

}
