import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from './calculadora.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	CalculadoraComponent
  ],
  exports: [
  	CalculadoraComponent
  ],
  providers: [
  	CalculadoraService
  ]
})
export class CalculadoraModule { }
