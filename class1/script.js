let app = new Vue({
  el: '#app',
  data: {
    frase: 'Olá <strong>Ayrton</strong>, tudo bem?!',
  },
})

let placar = new Vue({
  el: '#placar',
  data: {
    n: 6,
  },
})

let lista = new Vue({
  el: '#lista',
  data: {
    nomes: [
      {nome: 'Luan', sobrenome: 'Cruz', idade: 24},
      {nome: 'Matheus', sobrenome: 'Carvalho', idade: 23},
      {nome: 'Marli', sobrenome: 'Gonçalves', idade: 60},
      {nome: 'Ayrton', sobrenome: 'Guerra', idade: 27},
      {nome: 'Victor', sobrenome: 'Gonçalves', idade: 7},
    ],
  },
})

let bind = new Vue({
  el: '#bind',
  data: {
    texto: 'Texto Qualquer',
  },
})
