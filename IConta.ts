export interface iConta{
    saldo:number;
    depositar(valor:number):void;
    sacar(valor:number ):void;
    trasferencia(depositar: iConta,valor:number ):void;

}