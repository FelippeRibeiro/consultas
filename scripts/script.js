let result = document.getElementById("resultado");
let search = document.getElementById("searchData");
let submit = document.getElementById("submit");

submit.addEventListener("click", buscar);
search.addEventListener("keypress", (key) => {
  if (key.key == "Enter") {
    buscar();
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
