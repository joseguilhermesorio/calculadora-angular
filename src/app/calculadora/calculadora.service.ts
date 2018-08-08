/**
Serviço responsável por executar o calculo da calculadora

@author José Guilherme Sório<screamo.sp@gmail.com>
@since 1.0.0

*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }


  /*Criando as Constantes para armazenar as operações aritimeticas*/

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';


  /**
  Metodo que calcula dois numeros

  @param num1 number
  @param num2 number
  @param operacao string Operação a ser executada
  @return number que retorna o resultado

  */

  /*Criando a função de calculo */

  calcular(num1:number, num2:number, operacao:string):number{
  	let resultado:number //armazena o resultado da operacao
  	switch(operacao){
  		case CalculadoraService.SOMA:
  			resultado = num1 + num2;
  		break;
  		case CalculadoraService.SUBTRACAO:
  			resultado = num1 - num2;
  		break;
  		case CalculadoraService.MULTIPLICACAO:
  			resultado = num1 * num2;
  		break;
  		case CalculadoraService.DIVISAO:
  			resultado = num1 / num2;
  		break;
  		default:
  			resultado = 0;
  	}

  	return resultado;
  }

}
