function calcularLitros(){
   var ant;
   var atu;
   var tot;
   
   var ant = document.getElementById("anterior").value;
   var atu = document.getElementById("atual").value;

   ant = parseFloat(ant);
   atu = parseFloat(atu);

   tot = atu - ant;

   document.getElementById("total").innerHTML = "Quantidade de litros gastos no mês:" + tot;

   tot = tot / 1000;
   return tot;
}


function calcular(){

    var tot = calcularLitros();
    var vlrTot = 0.0;
    var faixaLitros = 0;
    console.log(tot)

    if(tot < 6){
        vlrTot = 20;

    }else if(tot < 11 ){
        faixaLitros = 5;
        tot = tot - faixaLitros;
        vlrTot = 20 + tot * 4;
    }else if(tot < 16){
        faixaLitros = 10;
        tot = tot - faixaLitros;
        vlrTot = 40 + tot * 5;
    }else if(tot > 16){
        faixaLitros = 15;
        tot = tot - faixaLitros;
        vlrTot = 65 + tot * 6;
    }

    vlrTot = parseFloat(vlrTot);
    document.getElementById("vlrTotal").innerHTML = "Valor total a ser pago: " + vlrTot;
}


