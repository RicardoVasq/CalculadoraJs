class Display {
     constructor(displayValorAnterior, displayValorActual){
          this.displayValorActual = displayValorActual;
          this.displayValorAnterior = displayValorAnterior;
          this.calculador = new Calculadora();
          this.valorActual = "";
          this.valorAnterior = "";
     }

     agregarNumero(numero){
          this.valorActual = numero;
          this.imprimirElemento();
     }

     imprimirElemento(){
          this.displayValorActual.textContent = this.valorActual;
          this.displayValorAnterior.textContent = this.valorAnterior;
     }
}