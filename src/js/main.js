var quantidadeofertas = 0
var quantidadedizimos = 0
var valorofertas = 0.00
var valordizimos = 0.00
var entradas = 0.00
var saidas = 0.00


function atualizardados(){
    obterDadosGerais()
    obterInformacoesEstatisticas()
    obterEntradasFinanceiras()
    obterSaidasOperacionaisAdm()

    var saldofinanceiroposterior = parseFloat(entradas)-parseFloat(saidas)  
    document.getElementById("saldofinanceiro").value= saldofinanceiroposterior.toFixed(2)
}

// Ofertas
function adicionaroferta(){ 
    valordaoferta = parseFloat(document.getElementById("valordaoferta").value).toFixed(2)

    if(valordaoferta!="NaN"){
        // Criação dos elementos - tags
        li = criarLI(quantidadeofertas,'oferta')
        div = criarDIV(quantidadeofertas)
        button = criarBUTTON('removeroferta',quantidadeofertas,'oferta')
        h5 = criarH5(quantidadeofertas,'oferta')
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
}
function removeroferta(liId){
    valorpararemover = document.getElementById(liId+"h5").innerText
    valorofertas = parseFloat(valorofertas) - parseFloat(valorpararemover)
    atualizardados()

    elemento = document.getElementById(liId);
    elemento.remove();
}
// Dizimos
function adicionardizimo(){ 
    valordodizimo = parseFloat(document.getElementById("valordodizimo").value).toFixed(2)

    if(valordodizimo!="NaN"){
        // Criação dos elementos - tags
        li = criarLI(quantidadedizimos,'dizimo')
        div = criarDIV(quantidadedizimos)
        button = criarBUTTON('removerdizimo',quantidadedizimos,'dizimo')
        h5 = criarH5(quantidadedizimos,'dizimo')
        texto = document.createTextNode(valordodizimo)


        elementoh5.appendChild(texto)
        elementodiv.appendChild(elementobotao)
        elementodiv.appendChild(elementoh5)
        elementoli.appendChild(elementodiv)

        document.getElementById("listadedizimos").appendChild(elementoli)

        valordizimos = parseFloat(valordizimos)+parseFloat(valordodizimo)
        console.log(valordizimos)
        quantidadedizimos = parseInt(quantidadedizimos)+1

        atualizardados()
    }
}
function removerdizimo(liId){
    valorpararemover = document.getElementById(liId+"h5").innerText
    valordizimos = parseFloat(valordizimos) - parseFloat(valorpararemover)
    atualizardados()

    elemento = document.getElementById(liId);
    elemento.remove();
}

// Funções para criação dos elementos
function criarLI(dado1,dado2){
    // Criação da li com os atributos
    elementoli = document.createElement("li")
    atributoidli = document.createAttribute("id")
    atributoidli.value = "li"+parseInt(dado1)+dado2
    elementoli.setAttributeNode(atributoidli)
}
function criarDIV(dado){
    // Criação da div com os atributos
    elementodiv = document.createElement("div")
    atributoiddiv = document.createAttribute("id")
    atributoiddiv.value = "div"+parseInt(dado)
    atributoclassdiv = document.createAttribute("class")
    atributoclassdiv.value = "li_div"
    elementodiv.setAttributeNode(atributoiddiv)
    elementodiv.setAttributeNode(atributoclassdiv)
}
function criarBUTTON(dado1,dado2,dado3){
    // Criação do button com os atributos
    elementobotao = document.createElement("input")
    atributoonclickbotao = document.createAttribute("onclick")
    atributoonclickbotao.value= dado1+"('li"+parseInt(dado2)+dado3+"')"
    atributotypebotao = document.createAttribute("type")
    atributotypebotao.value="button"
    atributoidbotao = document.createAttribute("id")
    atributoidbotao.value = "botao"+parseInt(dado2)
    atributoclassbotao = document.createAttribute("class")
    atributoclassbotao.value = "botao"
    elementobotao.setAttributeNode(atributoonclickbotao)
    elementobotao.setAttributeNode(atributotypebotao)
    elementobotao.setAttributeNode(atributoidbotao)
    elementobotao.setAttributeNode(atributoclassbotao)
}
function criarH5(dado1,dado2){
    // Criação da h5 com os atributos
    elementoh5 = document.createElement("h5")
    atributoidh5 = document.createAttribute("id")
    atributoidh5.value = "li"+parseInt(dado1)+dado2+"h5"
    elementoh5.setAttributeNode(atributoidh5)
}

// Funções de obtenção de dados
function obterDadosGerais(){
    // Dados Gerais
    endereco = document.getElementById("endereco").value
    numero = document.getElementById("numero").value
    mes = document.getElementById("mes").value
    bairro = document.getElementById("bairro").value
    cidade = document.getElementById("cidade").value
    cep = document.getElementById("cep").value

}
function obterInformacoesEstatisticas(){
    // Informações Estatísticas
    membros = document.getElementById("membros").value
    congregados = document.getElementById("congregados").value
    criancas = document.getElementById("criancas").value
}
function obterEntradasFinanceiras(){
    // Entradas Financeiras
    saldoanterior = document.getElementById("saldoanterior").value
    emprestimocredor = document.getElementById("emprestimocredor").value
    recursosdaigrejasede = document.getElementById("recursosdaigrejasede").value
    recursosdocrrn = document.getElementById("recursosdocrrn").value
    ofertademissoes = document.getElementById("ofertademissoes").value
    
    if(saldoanterior == ""){saldoanterior=0}
    if(emprestimocredor == ""){emprestimocredor=0}
    if(recursosdaigrejasede == ""){recursosdaigrejasede=0}
    if(recursosdocrrn == ""){recursosdocrrn=0}
    if(ofertademissoes == ""){ofertademissoes=0}

    saldoanterior = parseFloat(saldoanterior)
    emprestimocredor = parseFloat(emprestimocredor)
    recursosdaigrejasede = parseFloat(recursosdaigrejasede)
    recursosdocrrn = parseFloat(recursosdocrrn)
    ofertademissoes = parseFloat(ofertademissoes)

    somadeentradas = saldoanterior+emprestimocredor+recursosdaigrejasede+recursosdocrrn+ofertademissoes+valorofertas+valordizimos
    somasubtotaldeentradas = emprestimocredor+valordizimos+valorofertas+ofertademissoes


    inputofertas = document.getElementById('ofertas').value=valorofertas.toFixed(2)
    inputdizimos = document.getElementById('dizimos').value=valordizimos.toFixed(2)
    valortotaldeentradas = document.getElementById("valortotaldeentradas").innerHTML = somadeentradas.toFixed(2)
    subtotaldeentradas = document.getElementById("subtotaldeentradas").innerHTML=somasubtotaldeentradas.toFixed(2)
    document.getElementById("totaldasentradas").value = somadeentradas.toFixed(2)

    entradas = somadeentradas
}
function obterSaidasOperacionaisAdm(){
    // Saída Operacional Administrativa
    alugueldotemplo = document.getElementById("alugueldotemplo").value
    concessionarias = document.getElementById("concessionarias").value
    empregados = document.getElementById("empregados").value
    imposto = document.getElementById("imposto").value
    assistenciasocial = document.getElementById("assistenciasocial").value
    acoesevangelisticas = document.getElementById("acoesevangelisticas").value
    manutencao = document.getElementById("manutencao").value
    emprestimos = document.getElementById("emprestimos").value
    aquisicaodeativos = document.getElementById("aquisicaodeativos").value
    contribuicaoparaobarco = document.getElementById("contribuicaoparaobarco").value
    remessaparaasede = document.getElementById("remessaparaasede").value
    outros = document.getElementById("outros").value
    ofertasdemissoes = document.getElementById("ofertasdemissoes").value
    prebenda = document.getElementById("prebenda").value = (entradas/2).toFixed(2)
    previdencia = document.getElementById("previdencia").value
    verbacomplementar = document.getElementById("verbacomplementar").value

    if(alugueldotemplo==""){alugueldotemplo=0}
    if(concessionarias==""){concessionarias=0}
    if(empregados==""){empregados=0}
    if(imposto==""){imposto=0}
    if(assistenciasocial==""){assistenciasocial=0}
    if(acoesevangelisticas==""){acoesevangelisticas=0}
    if(manutencao==""){manutencao=0}
    if(emprestimos==""){emprestimos=0}
    if(aquisicaodeativos==""){aquisicaodeativos=0}
    if(contribuicaoparaobarco==""){contribuicaoparaobarco=0}
    if(remessaparaasede==""){remessaparaasede=0}
    if(outros==""){outros=0}
    if(ofertasdemissoes==""){ofertasdemissoes=0}
    if(prebenda==""){prebenda=0}
    if(previdencia==""){previdencia=0}
    if(verbacomplementar==""){verbacomplementar=0}

    alugueldotemplo = parseFloat(alugueldotemplo)
    concessionarias = parseFloat(concessionarias)
    empregados = parseFloat(empregados)
    imposto = parseFloat(imposto)
    assistenciasocial = parseFloat(assistenciasocial)
    acoesevangelisticas = parseFloat(acoesevangelisticas)
    manutencao = parseFloat(manutencao)
    emprestimos = parseFloat(emprestimos)
    aquisicaodeativos = parseFloat(aquisicaodeativos)
    contribuicaoparaobarco = parseFloat(contribuicaoparaobarco)
    remessaparaasede = parseFloat(remessaparaasede)
    outros = parseFloat(outros)
    ofertasdemissoes = parseFloat(ofertasdemissoes)
    prebenda = parseFloat(prebenda)
    previdencia = parseFloat(previdencia)
    verbacomplementar = parseFloat(verbacomplementar)

    somadesaidas = alugueldotemplo+concessionarias+empregados+imposto+assistenciasocial+acoesevangelisticas+manutencao+emprestimos+aquisicaodeativos+contribuicaoparaobarco+remessaparaasede+outros+ofertasdemissoes+prebenda+previdencia+verbacomplementar

    valortotaldesaidas = document.getElementById("valortotaldesaidas").innerHTML = somadesaidas.toFixed(2)
    document.getElementById("totaldassaidas").value = somadesaidas.toFixed(2)
    saidas = somadesaidas
}

// Funções para os Botões
function abrirjanelaoferta(){
    document.getElementById("janelaoferta").style.display = "block";
    document.getElementById("janeladizimo").style.display = "none";
}
function fecharjanelaoferta(){
    document.getElementById("janelaoferta").style.display = "none";
}
function abrirjaneladizimo(){
    document.getElementById("janeladizimo").style.display = "block";
    document.getElementById("janelaoferta").style.display = "none";
}
function fecharjaneladizimo(){
    document.getElementById("janeladizimo").style.display = "none";
}

