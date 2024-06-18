function exer6() {
    entrada = document.querySelector("#entrada").value;
    p = document.createElement("p");
    p.setAttribute("title","Nome Fornecido");
    node = document.createTextNode(entrada);
    p.appendChild(node);
    document.querySelector("#saida").append(p);
  }
  