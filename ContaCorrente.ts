import {iConta } from "./IConta";

export class ContaCorrente implements iConta{
public saldo:number= 0;
private ChequeEspecial =100;

depositar(valor: number): void {
    if(valor > 0){
        this.saldo += valor;
        console.log('deposito de r${valor} realizado com secesso. Saldo R$ {this.saldo}');
    }
}
sacar(valor: number): void {
    const saldo = this.saldo + this.ChequeEspecial;
    if(valor <= saldo){
        console.log('saque de R$ {valor} negado. limite cheque especial excedido');
    }


}
trasferencia(depositar: iConta, valor:number): void {
    const saldo = this.saldo + this.ChequeEspecial;
     
    if(valor <= saldo){
        this.saldo -= valor;
        depositar.depositar(valor)
        console.log('transferencia de valor {valor} realizada. Saldo atual {this.saldo}' );

    }else{
            console.log('transferencia de R${valor} negada. Limite de saque expendido')
    }

}

deposito( saldo:number, valor:number):void{
    this.saldo=0;

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
