//Prova de Desenvolvimento WEb - Vinicius Fujarra
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cadastroForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtendo os valores dos inputs
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const email = document.getElementById("email").value;
        const bairro = document.getElementById("bairro").value;

        // Determinando a categoria
        let categoria = "";
        if (idade <= 18) {
            categoria = "JUNIOR";
        } else if (idade <= 25) {
            categoria = "EXPERT";
        } else {
            categoria = "MASTER";
        }

        // Determinando o local
        let local = "";
        if (bairro === "jardim das oliveiras" || bairro === "vila romana") {
            local = "ZONA SUL";
        } else if (bairro === "jardim do portal" || bairro === "jardim panorama") {
            local = "ZONA OESTE";
        }

        // Criando a tabela e adicionando ao DOM
        const tabela = document.createElement("table");
        tabela.className = "table table-bordered mt-4";

        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        ["Nome", "Idade", "Categoria", "Local"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        tabela.appendChild(thead);

        const tbody = document.createElement("tbody");
        const trBody = document.createElement("tr");
        [nome, idade, categoria, local].forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            trBody.appendChild(td);
        });
        tbody.appendChild(trBody);
        tabela.appendChild(tbody);

        document.body.appendChild(tabela);
    });
});
