import { obterEntradasFinanceiras } from './dados.js';
var quantidadeofertas = 0
var valorofertas = 0.00

obterEntradasFinanceiras()

function atualizardados(){

    valorentradas = saldoanterior+emprestimocredor+recursosdaigrejasede+recursosdocrrn+ofertademissoes+valorofertas
    inputofertas = document.getElementById('ofertas').value=valorofertas.toFixed(2)


    valortotaldeentradas = document.getElementById("valortotaldeentradas").innerHTML = valorentradas.toFixed(2)

}

function abrirjanelaoferta(){
    document.getElementById("janelaoferta").style.display = "block";
}
function fecharjanelaoferta(){
    document.getElementById("janelaoferta").style.display = "none";
}

function abrirjaneladizimo(){
    document.getElementById("janeladizimo").style.display = "block";
}
function fecharjaneladizimo(){
    document.getElementById("janeladizimo").style.display = "none";
}

function adicionaroferta(){ 
    valordaoferta = parseFloat(document.getElementById("valordaoferta").value)
    valordaoferta = valordaoferta.toFixed(2)
    elementoli = document.createElement("li")
    atributoidli = document.createAttribute("id")
    atributoidli.value = "li"+parseInt(quantidadeofertas)
    elementoli.setAttributeNode(atributoidli)


    elementodiv = document.createElement("div")
    atributoiddiv = document.createAttribute("id")
    atributoiddiv.value = "div"+parseInt(quantidadeofertas)
    elementodiv.setAttributeNode(atributoiddiv)

    elementobotao = document.createElement("input")
    atributoonclickbotao = document.createAttribute("onclick")
    atributoonclickbotao.value="removeroferta('li"+parseInt(quantidadeofertas)+"')"
    atributotypebotao = document.createAttribute("type")
    atributotypebotao.value="button"
    atributoidbotao = document.createAttribute("id")
    atributoidbotao.value = "botao"+parseInt(quantidadeofertas)
    elementobotao.setAttributeNode(atributoonclickbotao)
    elementobotao.setAttributeNode(atributotypebotao)
    elementobotao.setAttributeNode(atributoidbotao)

    elementoh5 = document.createElement("h5")
    atributoidh5 = document.createAttribute("id")
    atributoidh5.value = "li"+parseInt(quantidadeofertas)+"h5"
    elementoh5.setAttributeNode(atributoidh5)

    texto = document.createTextNode(valordaoferta)

    elementoh5.appendChild(texto)
    elementodiv.appendChild(elementobotao)
    elementodiv.appendChild(elementoh5)
    elementoli.appendChild(elementodiv)

    document.getElementById("listadeofertas").appendChild(elementoli)
    valorofertas = parseFloat(valorofertas)+parseFloat(valordaoferta)
    quantidadeofertas = parseInt(quantidadeofertas)+1
    atualizardados()
}

function removeroferta(liId){
    valorpararemover = document.getElementById(liId+"h5").innerText
    valorofertas = parseFloat(valorofertas) - parseFloat(valorpararemover)
    atualizardados()

    elemento = document.getElementById(liId);
    elemento.remove();
}
