const url="https://raw.githubusercontent.com/GustavoSFG/2024-api-3b-alimento/refs/heads/main/comidas_bahia.json"

async function vizualizainfo(){
    const res = await fetch(url)
    const dados = await res.json()


    const comidas=Object.keys(dados)
    const votos=Object.values(dados)
    const comidasMaisVotados=comidas[0]
    const quantidadedeVotos=Object.values(dados)[0]

    const data =[
        {
            x:comidas,
            y:votos,
            type: 'bar'
        }
    ]







    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')
    
    paragrafo.innerHTML = ` Nessa pesquisa, mostrou as melhores comidas do nordeste. O ${comidasMaisVotados} foi a comida mais votada, com um total de ${quantidadedeVotos} votos, em uma pesquisa que teve um total de um milhão de participantes.`

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

    const grafico=document.createElement('div')
    grafico.className= 'grafico'
    document.getElementById("caixa-grafico").appendChild(grafico)
    Plotly.newPlot(grafico, data)

}

vizualizainfo()