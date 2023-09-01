import { Component, Input } from '@angular/core';

@Component({
  selector: 'vampiro-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})

export class CabecalhoComponent {
  @Input()
  titulo: string = "";

  @Input()
  ehAtributo: boolean = false;

  @Input()  
  public readonly LIMITE_MAXIMO = 10;

  public readonly LIMITE_MINIMO = 5;

  pontos: Array<Preenchimento> = [];

  public ehPermitidoAddPonto = true;

  public ehPermitidoDelPonto = true;

  ngOnInit(): void {
    if (this.ehAtributo) {

      this.pontos = [Preenchimento.QUADRADO_PREENCHIDO, Preenchimento.QUADRADO_VAZIO, Preenchimento.QUADRADO_VAZIO, Preenchimento.QUADRADO_VAZIO, Preenchimento.QUADRADO_VAZIO];

    }
    else {
      this.pontos = [Preenchimento.QUADRADO_VAZIO, Preenchimento.QUADRADO_VAZIO, Preenchimento.QUADRADO_VAZIO, Preenchimento.QUADRADO_VAZIO, Preenchimento.QUADRADO_VAZIO];

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

  public selecionarBola(posicaoBola: number) {
    let bolaEstaVazia: boolean = this.pontos[posicaoBola] == Preenchimento.QUADRADO_VAZIO;


    if (posicaoBola == 0 && this.ehAtributo) {
      posicaoBola = 1;
    }
    if (bolaEstaVazia) {
      for (let index = 0; index <= posicaoBola; index++) {
        this.pontos[index] = Preenchimento.QUADRADO_PREENCHIDO;
      }
    }
    else {
      for (let index = this.pontos.length-1; index >= posicaoBola; index--) {
        this.pontos[index] = Preenchimento.QUADRADO_VAZIO;
      }
    }
  }

  public adicionarPonto(): void {
    let ehPontoLimiteMaximo:boolean = this.pontos.length >= this.LIMITE_MAXIMO;
    if (ehPontoLimiteMaximo) {
      return;
    }

    this.pontos.push(Preenchimento.QUADRADO_VAZIO);
  }

  public apagarPonto():void{
    let ehPontoLimiteMinimo:boolean = this.pontos.length <= this.LIMITE_MINIMO;
    if(ehPontoLimiteMinimo){
      return;
    }
    this.pontos.pop();
  }



}



export enum Preenchimento {

  QUADRADO_VAZIO = 'bi bi-square"',
  QUADRADO_PREENCHIDO = 'bi bi-x-square'

}