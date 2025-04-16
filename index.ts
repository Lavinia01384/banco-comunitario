import {Cliente}  from "./Cliente";
import {iConta } from "./IConta";
import { ContaCorrente } from "./ContaCorrente";

const conta = new ContaCorrente;

console.log("TesteContaCorrente")
conta.depositar(100)
 conta.sacar(50)
  conta.sacar(120)
   conta.sacar(50)
    

   const outraconta = new ContaCorrente();
   conta.trasferencia(outraconta, 20)
   conta.trasferencia(outraconta, 50)
   console.log("fim teste")


