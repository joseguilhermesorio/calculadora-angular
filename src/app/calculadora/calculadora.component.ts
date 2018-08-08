import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from './calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

	private numero1: number
	private numero2: number
	private resultado: number
	private operacao: string

  constructor( private calculadoraService: CalculadoraService ) { }

  ngOnInit() {
  	this.limpar();

  }
  
  //Metodo limpar o display da calculadora
  limpar():void{
  	this.numero1 = 0;
  	this.numero2 = null;
  	this.resultado = null;
  	this.operacao = null;
  }



  // Adiciona o numero selecionado para o calculo posteriormente

  adicionaNumero(numero:string):void{
  	if(this.operacao === null){
  		this.numero1 = this.concatenaNumero(this.numero1, numero);
  	}
  	else{
  		this.numero2 = this.concatenaNumero(this.numero2, numero);
  	}
  }


  //Metodo para concatenar os numeros

  concatenaNumero(numeroAtual: string, numConcat:string):string{
  	//Caso tenha apenas 0 ou null, reinicia o valor
  	if(numeroAtual === 0 || numeroAtual === null){
  		numeroAtual = '';
  	}

  	// Se o primeiro digito for '.' , concatena o 0 na frente
  	if(numConcat === '.' && numeroAtual === ''){
  		return '0.';
  	}

  	//Caso tenha o . e tente digitar o . novamente, apenas retorna
  	if(numConcat === '.' && numeroAtual.indexOf('.') >-1){
  		return numeroAtual;
  	}

  	return numeroAtual + numConcat;
  }



  //Definir a operacao
  definirOperacao(operacao:string):string{

  	//Apenas define a operacao caso não exista uma
  	if(this.operacao === null){
  		this.operacao = operacao;
  		return;
  	}

  	//caso a operacao seja definida e o numero2 selecionado efetua o calculo

  	if(this.numero2 !== null){
  		this.resultado = this.calculadoraService.calcular(
  			parseFloat(this.numero1),
  			parseFloat(this.numero2),
  			this.operacao);
  		this.operacao = operacao;
  		this.numero1 = this.resultado.toString();
  		this.numero2 = null;
  		this.resultado = null;
  	}
  }


  //Efetua o Calculo da Operacao
  calcular():void{
  	if(this.numero2 === null){
  		return;
  	}

  	this.resultado = this.calculadoraService.calcular(
  		parseFloat(this.numero1), 
  		parseFloat(this.numero2), 
  		this.operacao);
  }

  //Retorna o valor no Display

  get display():string{
  	if(this.resultado !== null){
  		return this.resultado.toString();
  	}

  	if(this.numero2 !== null){
  		return this.numero2;
  	}

  	return this.numero1;

  }

}
