import { IfStmt } from '@angular/compiler';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'vampiro-square-points',
  templateUrl: './square-points.component.html',
  styleUrls: ['./square-points.component.scss']
})
export class SquarePointsComponent {

  @Input()

  nome: string = "";


  points: Array<Preencher> = [];



  ngOnInit(): void {    
    this.points = [Preencher.QUADRADO_VAZIO, Preencher.QUADRADO_VAZIO, Preencher.QUADRADO_VAZIO, Preencher.QUADRADO_VAZIO, Preencher.QUADRADO_VAZIO]
  }

  public selecionarQuadrado(posicaoQuadrado: number) {
    let quadradoEstaVazio: boolean = this.points[posicaoQuadrado] == Preencher.QUADRADO_VAZIO;

    if (quadradoEstaVazio) {
      for(let index = 0; index <= posicaoQuadrado; index++) {
        this.points[index] = Preencher.QUADRADO_MARCADO
      }
    } else {
      for (let index = this.points.length-1; index >= posicaoQuadrado; index--) {
        this.points[index] = Preencher.QUADRADO_VAZIO;
      }
    }
  }

}

export enum Preencher {
  QUADRADO_VAZIO = 'bi bi-square',
  QUADRADO_MARCADO = 'bi bi-x-square'
}