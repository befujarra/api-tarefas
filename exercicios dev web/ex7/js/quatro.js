function exer4() {
  entrada = document.querySelector("#entrada").value;
  p = document.createElement("p");
  node = document.createTextNode("Ana Maria");
  p.appendChild(node);
  document.querySelector("#saida").append(p);
}
