class Display {
     constructor(displayValorAnterior, displayValorActual) {
          this.displayValorActual = displayValorActual;
          this.displayValorAnterior = displayValorAnterior;
          this.calculador = new Calculadora();
          this.tipoOperacion = undefined;
          this.valorActual = '';
          this.valorAnterior = '';
          this.signos = {
               sumar: '+',
               dividir: '%',
               multiplicar: 'x',
               restar: '-',
          }
     }

     borrar(){
          this.valorActual = this.valorActual.toString().slice(0,-1);
          this.imprimirElemento()
     }

     borrarTodo (){
          this.valorActual = "";
          this.valorAnterior = "";
          this.tipoOperacion = undefined;
          this.imprimirElemento();
     }

     agregarNumero(numero){
          if(numero == "." && this.valorActual.includes(".")) return
          this.valorActual = this.valorActual.toString() + numero.toString();
          this.imprimirElemento();
     }

     imprimirElemento(){
     this.displayValorActual.textContent = this.valorActual;
     this.displayValorAnterior.textContent = this.valorAnterior;
     }
}