/**
 * 
 * salario
 * 
 */

 let valor 

 function calcularHora() {
     let salario, custos, hora
     salario = parseFloat(frmSalario.txtLiquido.value.replace(",","."))
     custos = parseFloat(frmSalario.txtCustos.value.replace(",","."))
     hora = parseFloat(frmSalario.txtHora.value.replace(",","."))
     

     valor = (salario + salario * 0.3 + custos + salario * 0.2) * 1/hora 
     frmSalario.txtValor.value = valor.toFixed(1)
 }