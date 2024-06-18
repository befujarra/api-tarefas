function exer10() {
  entrada = document.querySelector("#entrada").value;

  if (entrada.length > 0) {
    p = document.createElement("li");
    p.setAttribute("title", entrada);
    node = document.createTextNode(entrada);
    p.appendChild(node);
    document.querySelector("#saida").append(p);
    click = document.createAttribute("onclick");
    click.value = "exibir()";
    p.setAttributeNode(click);
    t = document.querySelectorAll("li").length;
    document.getElementById("total").textContent = t;
    document.querySelector("#entrada").value = null;
  }
}

function exibir() {
  alert("Exibindo");
}
