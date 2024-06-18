function exer5() {
    entrada = document.querySelector("#entrada").value;
    p = document.createElement("p");
    node = document.createTextNode(entrada);
    p.appendChild(node);
    document.querySelector("#saida").append(p);
  }
  