// estado 
let amigos = [];

// adicionar amigo 
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) {
    alert("Digite um nome válido!");
    return;
  }

  // evita duplicados
  if (amigos.some(n => n.toLowerCase() === nome.toLowerCase())) {
    alert("Esse nome já está na lista!");
    input.value = "";
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}

// atualizar lista na tela 
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome, index) => {
    const li = document.createElement("li");
    li.textContent = nome;

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => {
      amigos.splice(index, 1);
      atualizarLista();
    };

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

// sortear amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo secreto sorteado: <strong>${sorteado}</strong></li>`;
}
