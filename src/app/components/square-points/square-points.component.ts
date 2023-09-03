import { IfStmt } from '@angular/compiler';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'vampiro-square-points',
  templateUrl: './square-points.component.html',
  styleUrls: ['./square-points.component.scss']
})
export class SquarePointsComponent {


  @Input()
  ehAtributo: boolean = false;

  @Input()  
  public readonly LIMITE_MAXIMO = 10;

  public readonly LIMITE_MINIMO = 5;

  squarePoints: Array<PreenchimentoDoQuadrado> = [];

  public ehPermitidoAddPonto = true;

  public ehPermitidoDelPonto = true;

  ngOnInit(): void {
    if (this.ehAtributo) {
       this.squarePoints = [PreenchimentoDoQuadrado.QUADRADO_VAZIO, PreenchimentoDoQuadrado.QUADRADO_VAZIO, PreenchimentoDoQuadrado.QUADRADO_VAZIO, PreenchimentoDoQuadrado.QUADRADO_VAZIO, PreenchimentoDoQuadrado.QUADRADO_VAZIO];
    }
      
  }

  public verificarPermissaoAddPonto() {
    let devePermitirAddPonto;

    if (devePermitirAddPonto) {
      this.ehPermitidoAddPonto = true;
      return;
    }

  }
  
  public verificarPermissaoDelPonto() {
    let DevePermitirDelPonto;

    if (DevePermitirDelPonto) {
      this.ehPermitidoDelPonto = true;
      return;
    }

  }

  public selecionarQuadrado(posicaoQuadrado: number) {
    let quadradoEstaVazio: boolean = this.squarePoints[posicaoQuadrado] == PreenchimentoDoQuadrado.QUADRADO_VAZIO;


    if (posicaoQuadrado == 0 && this.ehAtributo) {
      posicaoQuadrado = 1;
    }
    if (quadradoEstaVazio) {
      for (let index = 0; index <= posicaoQuadrado; index++) {
        this.squarePoints[index] = PreenchimentoDoQuadrado.QUADRADO_PREENCHIDO;
      }
    }
    else {
      for (let index = this.squarePoints.length-1; index >= posicaoQuadrado; index--) {
        this.squarePoints[index] = PreenchimentoDoQuadrado.QUADRADO_VAZIO;
      }
    }
  }

  public adicionarPonto(): void {
    let ehPontoLimiteMaximo:boolean = this.squarePoints.length >= this.LIMITE_MAXIMO;
    if (ehPontoLimiteMaximo) {
      return;
    }

    this.squarePoints.push(PreenchimentoDoQuadrado.QUADRADO_VAZIO);
  }

  public apagarPonto():void{
    let ehPontoLimiteMinimo:boolean = this.squarePoints.length <= this.LIMITE_MINIMO;
    if(ehPontoLimiteMinimo){
      return;
    }
    this.squarePoints.pop();
  }


}

export enum PreenchimentoDoQuadrado {

  QUADRADO_VAZIO = 'bi bi-square',
  QUADRADO_PREENCHIDO = 'bi bi-x-square'

}