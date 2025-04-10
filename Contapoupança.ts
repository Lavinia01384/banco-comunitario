import { Conta } from "./Conta";
 class Contapoupança implements Conta{
     depositar: number;
     sacar: number;
     trasferencia: number;
     saldo: number;
     calcjuros:number;
     taxajuros:number;


     constructor( depositar:number, sacar:number, trasferencia:number, saldo:number, calcjuros:number, taxajuros:number){
        this.depositar=depositar;
        this.sacar=sacar;
        this.trasferencia=trasferencia;
        this.saldo=saldo;
        this.calcjuros=calcjuros;
        this.taxajuros=taxajuros;
 
}
calcularTa(saldo:number):void{
    saldo=+ (this.taxajuros*saldo)

}
 }