export function obterDadosGerais(){
    // Dados Gerais
    endereco = document.getElementById("endereco").value
    numero = document.getElementById("numero").value
    mes = document.getElementById("mes").value
    bairro = document.getElementById("bairro").value
    cidade = document.getElementById("cidade").value
    cep = document.getElementById("cep").value
    console.log('ok')
}

export function obterInformacoesEstatisticas(){
    // Informações Estatísticas
    membros = document.getElementById("membros").value
    congregados = document.getElementById("congregados").value
    criancas = document.getElementById("criancas").value
}

export function obterEntradasFinanceiras(){
    // Entradas Financeiras
    saldoanterior = parseFloat(document.getElementById("saldoanterior").value)
    emprestimocredor = parseFloat(document.getElementById("emprestimocredor").value)
    recursosdaigrejasede = parseFloat(document.getElementById("recursosdaigrejasede").value)
    recursosdocrrn = parseFloat(document.getElementById("recursosdocrrn").value)
    ofertademissoes = parseFloat(document.getElementById("ofertademissoes").value)
    console.log("deu")
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

