//VANS

function getCarro2() {
    fetch("https://api-bestcar.herokuapp.com/carros/picape-compacta")
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)
            

            
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                console.log(item)
                var list =
                    `<div>
                        <br><br>
                        <div>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Marca: <span id="marca"> ${item.marca}</span>
                            </h5>
                            </div>
                            <div>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modelo: 
                            <span id="modelo"> ${item.modelo}</span>&nbsp;
                            </h5></div>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ano: 
                            <span id="ano"> ${item.ano}</span>&nbsp;
                            </h5>
      
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consumo: 
                            <span id="pontuacaoDetalhada.pontuacaoConsumo"> ${item.pontuacaoDetalhada.pontuacaoConsumo}</span>&nbsp;
                            </h5>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conforto/Acabamento: 
                            <span id="pontuacaoConfortoeAcabamento"> ${item.pontuacaoDetalhada.pontuacaoConfortoeAcabamento}</span>&nbsp;
                            </h5>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custo Beneficio: 
                            <span id="pontuacaoCustoBeneficio"> ${item.pontuacaoDetalhada.pontuacaoCustoBeneficio}</span>&nbsp;
                            </h5>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design: 
                            <span id="pontuacaoDesign"> ${item.pontuacaoDetalhada.pontuacaoDesign}</span>&nbsp;
                            </h5>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dirigibilidade: 
                            <span id="pontuacaoDirigibilidade"> ${item.pontuacaoDetalhada.pontuacaoDirigibilidade}</span>&nbsp;
                            </h5>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manutenção: 
                            <span id="pontuacaoManutencao"> ${item.pontuacaoDetalhada.pontuacaoManutencao}</span>&nbsp;
                            </h5>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance: 
                            <span id="pontuacaoPerfomance"> ${item.pontuacaoDetalhada.pontuacaoPerfomance}</span>&nbsp;
                            </h5>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pontuação Total: 
                            <span id="pontuacaoTotal"> ${item.pontuacaoTotal}</span>&nbsp;
                            </h5>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valor: 
                            <span id="valor"> ${item.valor}</span>&nbsp;
                            </h5>

                </div>
      
    </div>` ;


    

                document.getElementById('card-deck').insertAdjacentHTML('beforeend', list);
                
                
                
            }

        })
}

getCarro2()