function exer7() {
    entrada = document.querySelector("#entrada").value;
    p = document.createElement("li");
    p.setAttribute("title", entrada);
    node = document.createTextNode(entrada);
    p.appendChild(node);
    document.querySelector("#olista").append(p);
  }
  