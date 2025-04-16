import { iConta } from "./IConta";
 class ContaPoupanca implements iConta{
    saldo:  0;
    taxajuros = 0;
    private ChequeEspecial =100;

    constructor( saldo:number, taxajuros:number){
        this.saldo=0;
        this.taxajuros=taxajuros;
        this.ChequeEspecial=100;
      }



    depositar(valor: number): void {
         if(valor > 0){
            this.saldo += valor;
         }
     }
     sacar(valor: number): void {
         if (valor <= this.saldo + this.ChequeEspecial){
            this.saldo -=valor;
         }
     }
     trasferencia(depositar: iConta, valor: number): void {
         if(valor <= this.saldo + this.ChequeEspecial){
            this.sacar(valor)
            this.depositar(valor)
         }
     }
     

calcularTa(saldo:number):void{
    saldo=+ (this.taxajuros*saldo)

}
 }