var quantidadeofertas = 0
var quantidadedizimos = 0
var valorofertas = 0.00
var valordizimos = 0.00


function atualizardados(){
    obterDadosGerais()
    obterEntradasFinanceiras()
    obterInformacoesEstatisticas()
    obterSaidasOperacionaisAdm()
}















// Ofertas
function adicionaroferta(){ 
    valordaoferta = parseFloat(document.getElementById("valordaoferta").value).toFixed(2)

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
    elementodiv.setAttributeNode(atributoiddiv)
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
    elementobotao.setAttributeNode(atributoonclickbotao)
    elementobotao.setAttributeNode(atributotypebotao)
    elementobotao.setAttributeNode(atributoidbotao)
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

    somadasentradas = saldoanterior+emprestimocredor+recursosdaigrejasede+recursosdocrrn+ofertademissoes+valorofertas+valordizimos
    inputofertas = document.getElementById('ofertas').value=valorofertas.toFixed(2)
    inputdizimos = document.getElementById('dizimos').value=valordizimos.toFixed(2)
    valortotaldeentradas = document.getElementById("valortotaldeentradas").innerHTML = somadasentradas.toFixed(2)

    return saldoanterior,emprestimocredor,recursosdaigrejasede,recursosdocrrn,ofertademissoes,inputofertas,inputdizimos
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
    remessaparaasede = document.getElementById("remessaparaasede")
    outros = document.getElementById("outros").value
    ofertasdemissoes = document.getElementById("ofertasdemissoes").value
    prebenda = document.getElementById("prebenda").value
    previdencia = document.getElementById("previdencia").value
    verbacomplementar = document.getElementById("verbacomplementar").value    
}

// Funções para os Botões
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