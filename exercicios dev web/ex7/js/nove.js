function exer9() {

    entrada = document.querySelector("#entrada").value;

    if (entrada.length > 0) {
        p = document.createElement("li");
        p.setAttribute("title", entrada);
        node = document.createTextNode(entrada);
        p.appendChild(node);
        document.querySelector("#saida").append(p);
        t = document.querySelectorAll("li").length;
        document.getElementById("total").textContent = t;
        document.querySelector("#entrada").value = null;
    }
}