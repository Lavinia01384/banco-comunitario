import { Conta } from "./Conta";

class ContaCorrente implements Conta{
    depositar:number;
    sacar:number;
    trasferencia:number;
    saldo:number;

    constructor( depositar:number, sacar:number, trasferencia:number, saldo:number){
       this.depositar=depositar;
       this.sacar=sacar;
       this.trasferencia=trasferencia;
       this.saldo=saldo;


}
deposito( saldo:number, valor:number):void{
    this.saldo=+valor;

}
sacarr( saldo:number, valor:number):void{ 
 if(saldo<0){
     this.saldo=+100
 }
   

if(saldo>=valor){
    saldo=-valor;
}
    if(saldo<valor){

    }

}
}
