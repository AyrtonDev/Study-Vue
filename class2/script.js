const app = new Vue({
  el: '#app',
  data: {
    nome: 'Ayrton',
    idade: 27,
  },
  methods: {
    mostrar: (nome, idade) => {
      let txt = 'Olá, ' + nome + ' - ' + idade + ' anos'
      return txt
    },
  },
})

function flag(pais) {
  return '<img src="paises/' + pais + '.png"/>'
}

let country = new Vue({
  el: '#country',
  data: {
    pais: '',
    argentina: flag('argentina'),
    brazil: flag('brazil'),
    china: flag('china'),
    uk: flag('uk'),
    usa: flag('usa'),
  },
  methods: {
    paises: function () {
      return [
        {bandeira: this.argentina, continente: 'América do Sul'},
        {bandeira: this.brazil, continente: 'América do Sul'},
        {bandeira: this.china, continente: 'Ásia'},
        {bandeira: this.uk, continente: 'Europa'},
        {bandeira: this.usa, continente: 'América do Norte'},
      ]
    },
  },
})

country.pais = 'brazil'

Vue.component('Country', {
  props: ['name', 'continent'],
  template: '<p v-html="name + continent"></p>',
})
