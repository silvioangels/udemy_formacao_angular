/**
 * Serviço responsavel por executar as operações da
 * calculadora.
 *
 * @author Silvio Angelo
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  constructor() { }
  /**
   * Defini as constantes utilizadas
   * para identificar as operações de calculo
  */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';


  /**
   * Metodo que calcula uma operação matematica
   * dado dois numeros.
   * @param num1 number
   * @param num2 number
   * @param operacao String Operacao a ser executada
   * @return number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena o resultado da operacao

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
        break;
    }

    return resultado;
  }
}
