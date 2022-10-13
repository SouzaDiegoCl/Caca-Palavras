function Gerar() {
    //Fazer botão e select desaparecerem:
    const btn = document.getElementById('btn');
    btn.style.display = 'none';
    const slct = document.getElementById('temaSelect');
    slct.style.display = 'none';
    const texto = document.getElementById('texto');
    texto.style.display = 'none';
    /*--------------------*/

    matrizAnimais = new Array;
    matrizCores = new Array;
    matrizFormas = new Array;
    matrizAnimais = [
        ["A", "B", "E", "L", "H", "A", "", "", "", "", "", ""],
        ["", "", "", "O", "", "", "", "", "H", "", "F", ""],
        ["", "", "", "N", "", "", "", "", "I", "", "U", ""],
        ["", "", "", "T", "", "", "", "", "P", "", "R", ""],
        ["", "", "", "R", "", "", "", "", "O", "", "A", ""],
        ["", "", "", "I", "", "", "", "", "P", "", "O", ""],
        ["", "", "", "N", "", "", "", "", "O", "", "Z", ""],
        ["", "", "", "H", "", "", "", "", "T", "", "I", ""],
        ["", "", "", "A", "", "", "", "", "A", "", "N", ""],
        ["", "", "", "S", "", "", "", "", "M", "", "H", ""],
        ["", "", "", "", "", "", "", "", "O", "", "O", ""],
        ["", "", "P", "A", "N", "D", "A", "", "", "", "", ""],
    ];
    matrizCores = [
        ["V", "E", "R", "M", "E", "L", "H", "O", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "R", "", "", "", "", "", "", "", "", ""],
        ["", "", "O", "", "", "", "", "V", "", "", "", ""],
        ["", "", "S", "", "", "P", "R", "E", "T", "O", "", ""],
        ["", "", "A", "", "", "", "", "R", "", "", "", ""],
        ["", "", "", "", "", "", "", "D", "", "", "", ""],
        ["", "", "", "", "", "", "", "E", "", "", "", ""],
        ["", "A", "Z", "U", "L", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
    ];
    matrizFormas = [
        ["", "", "", "", "", "D", "", "", "", "", "", ""],
        ["T", "E", "T", "R", "A", "E", "D", "R", "O", "", "", ""],
        ["", "", "", "", "", "C", "", "", "C", "", "", ""],
        ["", "", "", "", "", "A", "", "", "T", "", "", ""],
        ["", "", "", "", "", "G", "", "", "A", "", "", ""],
        ["", "", "", "", "", "O", "", "", "E", "", "", ""],
        ["", "", "", "", "", "N", "", "", "D", "", "", ""],
        ["", "", "C", "", "", "O", "", "", "R", "", "", ""],
        ["", "", "U", "", "", "", "", "", "O", "", "", ""],
        ["", "", "B", "", "", "", "", "", "", "", "", ""],
        ["", "P", "O", "L", "I", "E", "D", "R", "O", "S", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
    ];

    var select = document.getElementById("temaSelect");
    var tema = select.options[select.selectedIndex].value;

    var output = document.getElementById('output');
    if (tema == "Animais") {
        for (linha = 0; linha < 12; linha++) {
            var tr = document.createElement('tr');
            output.appendChild(tr);
            for (coluna = 0; coluna < 12; coluna++) {
                var td = document.createElement('td');
                td.innerText = matrizAnimais[linha][coluna];
                tr.appendChild(td);
            }
        }
    }
    else if (tema == "Cores") {
        for (linha = 0; linha < 12; linha++) {
            var tr = document.createElement('tr');
            output.appendChild(tr);
            for (coluna = 0; coluna < 12; coluna++) {
                var td = document.createElement('td');
                td.innerText = matrizCores[linha][coluna];
                tr.appendChild(td);
            }
        }
    }
    else if (tema == "Formas") {
        for (linha = 0; linha < 12; linha++) {
            var tr = document.createElement('tr');
            output.appendChild(tr);
            for (coluna = 0; coluna < 12; coluna++) {
                var td = document.createElement('td');
                td.innerText = matrizFormas[linha][coluna];
                tr.appendChild(td);
            }
        }
    }
    for (let node of document.querySelectorAll("td")) {
        if (node.textContent != "") {
            node.className = "selected";
        }
        else {
            let charcode = Math.round(65 + Math.random() * 25)
            node.textContent = String.fromCharCode(charcode)
        }
    }
}


btn.addEventListener('click', () => {
    // 👇️ hide button
});