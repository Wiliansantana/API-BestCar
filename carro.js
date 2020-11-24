function getCarro() {
    fetch("http://localhost:8080/api/v1/carro")
        .then((resp) => resp.json()) 
        .then(function (data) {
            console.log(data)
            document.getElementById("marca").innerText = data.marca 
            document.getElementById("modelo").innerText = data.modelo 
            document.getElementById("ano").innerText = data.ano 
            document.getElementById("ptotal").innerText = data.ptotal 
            document.getElementById("ptdetalhada").innerText = data.ptdetalhada["Conforto / Acabamento"] 
            document.getElementById("ptdetalhada1").innerText = data.ptdetalhada["Consumo"]
            document.getElementById("ptdetalhada2").innerText = data.ptdetalhada["Custo"]
            document.getElementById("ptdetalhada3").innerText = data.ptdetalhada["Design"]
            document.getElementById("ptdetalhada4").innerText = data.ptdetalhada["Dirigibilidade"]
            document.getElementById("ptdetalhada5").innerText = data.ptdetalhada["Manutenção"]
            document.getElementById("ptdetalhada6").innerText = data.ptdetalhada["Performance"]
            document.getElementById("valor").innerText = data.valor
            
            // PT2

            document.getElementById("marca1").innerText = data.marca1
            document.getElementById("modelo1").innerText = data.modelo1 
            document.getElementById("ano1").innerText = data.ano1
            document.getElementById("ptotal1").innerText = data.ptotal1 
            document.getElementById("ptdetalhada7").innerText = data.ptdetalhada7["Conforto / Acabamento"] 
            document.getElementById("ptdetalhada8").innerText = data.ptdetalhada7["Consumo"]
            document.getElementById("ptdetalhada9").innerText = data.ptdetalhada7["Custo"]
            document.getElementById("ptdetalhada10").innerText = data.ptdetalhada7["Design"]
            document.getElementById("ptdetalhada11").innerText = data.ptdetalhada7["Dirigibilidade"]
            document.getElementById("ptdetalhada12").innerText = data.ptdetalhada7["Manutenção"]
            document.getElementById("ptdetalhada13").innerText = data.ptdetalhada7["Performance"]
            document.getElementById("valor1").innerText = data.valor1

            //PT3

            document.getElementById("marca2").innerText = data.marca2
            document.getElementById("modelo2").innerText = data.modelo2 
            document.getElementById("ano2").innerText = data.ano2 
            document.getElementById("ptotal2").innerText = data.ptotal2 
            document.getElementById("ptdetalhada14").innerText = data.ptdetalhada14["Conforto / Acabamento"] 
            document.getElementById("ptdetalhada15").innerText = data.ptdetalhada14["Consumo"]
            document.getElementById("ptdetalhada16").innerText = data.ptdetalhada14["Custo"]
            document.getElementById("ptdetalhada17").innerText = data.ptdetalhada14["Design"]
            document.getElementById("ptdetalhada18").innerText = data.ptdetalhada14["Dirigibilidade"]
            document.getElementById("ptdetalhada19").innerText = data.ptdetalhada14["Manutenção"]
            document.getElementById("ptdetalhada20").innerText = data.ptdetalhada14["Performance"]
            document.getElementById("valor2").innerText = data.valor
            

        })
}

getCarro()

