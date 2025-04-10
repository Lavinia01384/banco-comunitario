import { ICliente } from "./ICliente";

class Cliente implements ICliente{
    nome:string; 
    id:number;
    endereço:string;
    numerotelefone:number;
    rendasalarial:number;

  constructor( nome:string, id:number, endereço:string, numerotelefone:number, rendasalarial:number){
    this.nome=nome;
    this.id=id;
    this.endereço=endereço;
    this.numerotelefone=numerotelefone;
    this.rendasalarial=rendasalarial;
  }
  cadastrar():void{
    console.log (`nome: ${this.nome} /id ${this.id} /endereco ${this.endereço} /numerotelefone ${this.numerotelefone} /rendasalarial ${this.rendasalarial}`)
  }
}