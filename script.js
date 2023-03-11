let expressao = "";

function insert(caracter) {
  expressao += caracter;
  document.getElementById("resultado").innerText = expressao;
}

function back() {
  expressao = expressao.slice(0, -1);
  document.getElementById("resultado").innerText = expressao;
}

function clean() {
  expressao = "";
  document.getElementById("resultado").innerText = "";
}

function calcular() {
  let resultado;
  try {
    resultado = eval(expressao);
  } catch (e) {
    if (e instanceof SyntaxError) {
      resultado = "Erro";
    }
  }
  document.getElementById("resultado").innerText = resultado;
  expressao = resultado.toString();
}