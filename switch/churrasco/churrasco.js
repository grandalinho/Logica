/**
 * 
 * Churrasco
 * @author Jonas Nicioli
 * 
 */

 //variavel global
 let totalChurrasco

 function calcularChurrasco() {

    let homem, mulher, crianca, carne, refrigerante, cerveja, totalHomem, totalMulher, totalCrianca, totalCada

     homem = parseFloat(frmChurrasco.txtHomem.value.replace(",","."))
     mulher = parseFloat(frmChurrasco.txtMulher.value.replace(",","."))
     crianca = parseFloat(frmChurrasco.txtCrianca.value.replace(",","."))

     carne = parseFloat(frmChurrasco.txtCarne.value.replace(",","."))
     refrigerante = parseFloat(frmChurrasco.txtRefrigerante.value.replace(",","."))
     cerveja = parseFloat(frmChurrasco.txtCerveja.value.replace(",","."))


    totalHomem = (12 * cerveja) * homem + (carne * 0.3 ) * homem 
    totalMulher = (4 * cerveja) * mulher + (2 * refrigerante) * mulher + (carne * 0.3) * mulher
    totalCrianca = (refrigerante * 2) * crianca + (0.1 * carne) * crianca
    totalChurrasco = totalHomem + totalMulher + totalCrianca

    
    totalCada = totalChurrasco / (mulher + homem)
    
     frmChurrasco.txtTotal.value = totalChurrasco.toFixed(2)
     frmChurrasco.txtCada.value = totalCada.toFixed(2)
 }