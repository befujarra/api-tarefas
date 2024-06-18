function exer8() {

    entrada = document.querySelector("#entrada").value;

    if (entrada.length > 0) {
        p = document.createElement("li");
        p.setAttribute("title", entrada);
        node = document.createTextNode(entrada);
        p.appendChild(node);
        document.querySelector("#olista").append(p);
        
    }
}