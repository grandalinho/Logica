/**
 * 
 * Ponto de vendas
 * @author Jonas Nicioli
 * 
 */

 //variavel global
 let converDolar

 function calcularConver() {
     let valorReal, dolarDia
     valorReal = parseFloat(frmDolar.txtReal.value.replace(",","."))
     dolarDia = parseFloat(frmDolar.txtDolar.value.replace(",","."))
     converDolar = valorReal * dolarDia
     frmDolar.txtTotalDolar.value = converDolar.toFixed(3)
 }