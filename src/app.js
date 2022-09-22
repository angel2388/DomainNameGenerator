var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

function dominions() {
  let resultado = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++)
        resultado.push(pronoun[i] + adj[j] + noun[k] + ".com");
    }
  }
  return resultado;
}
