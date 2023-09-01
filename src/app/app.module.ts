import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PontosComponent } from './pontos/pontos.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { NavegacaoComponent } from './components/navegacao/navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PontosComponent,
    CabecalhoComponent,
    NavegacaoComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
