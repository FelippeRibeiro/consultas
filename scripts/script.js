let result = document.getElementById("resultado");
let search = document.getElementById("searchData");
let submit = document.getElementById("submit");

let resultadoCnpj = document.getElementById("resultadoCnpj");
let searchCnpj = document.getElementById("searchCnpj");
let submitCnpj = document.getElementById("submitCnpj");

async function buscarCnpj() {
  let data = searchCnpj.value;
  await fetch(`https://minhareceita.org/${data}`)
    .then((res) => {
      return res.json().then((res) => {
        if (resultadoCnpj.childElementCount > 0) {
          resultadoCnpj.removeChild(resultadoCnpj.firstChild);
        }
        let ul = document.createElement("ul");
        resultadoCnpj.appendChild(ul);

        Object.keys(res).forEach((el) => {
          let li = document.createElement("li");
          li.innerHTML = `${el.toUpperCase()}: ${res[el]}`;
          ul.appendChild(li);
        });
      });
    })

    .catch((er) => {
      alert(`Erro ${er}`);
    });
}

submitCnpj.addEventListener("click", buscarCnpj);
searchCnpj.addEventListener("keypress", (key) => {
  if (key.key == "Enter") {
    buscarCnpj();
  }
});

async function buscar() {
  let data = search.value;
  await fetch(`https://viacep.com.br/ws/${data}/json/`)
    .then((res) => {
      return res.json().then((res) => {
        if (result.childElementCount > 0) {
          result.removeChild(result.firstChild);
        }
        let ul = document.createElement("ul");
        result.appendChild(ul);

        Object.keys(res).forEach((el) => {
          let li = document.createElement("li");
          li.innerHTML = `${el.toUpperCase()}: ${res[el]}`;
          ul.appendChild(li);
        });
      });
    })

    .catch((er) => {
      alert(`Erro ${er}`);
    });
}

submit.addEventListener("click", buscar);
search.addEventListener("keypress", (key) => {
  if (key.key == "Enter") {
    buscar();
  }
});
