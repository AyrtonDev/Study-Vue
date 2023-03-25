let app = new Vue({
  el: '#app',
  data: {
    name: 'Ayrton',
    conta: '',
    aviso: '',
    result: '',
    timer: null,
    primeiroNome: '',
    segundoNome: '',
  },
  computed: {
    switchName: function () {
      return this.name.split('').reverse().join('')
    },
    nomeCompleto: {
      get: function () {
        return this.primeiroNome + ' ' + this.segundoNome
      },
      set: function (novoValor) {
        const nomes = novoValor.split(' ')
        this.primeiroNome = nomes[0]
        this.segundoNome = nomes[1]
      },
    },
  },
  methods: {
    makeCount: function () {
      this.aviso = ''

      this.result = eval(this.conta)
    },
  },
  watch: {
    conta: function () {
      this.aviso = 'Digitando...'

      if (this.timer != null) {
        clearTimeout(this.timer)
      }

      this.timer = setTimeout(this.makeCount, 1000)
    },
    // primeiroNome: function () {
    //   this.nomeCompleto = this.primeiroNome + ' ' + this.segundoNome
    // },
    // segundoNome: function () {
    //   this.nomeCompleto = this.primeiroNome + ' ' + this.segundoNome
    // },
  },
})

// a diferença entre um elemento computado e um metodo, depedendo de quantas vezes ele for chamado, sera executado uma vez, assim guardando a resposta em cache para melhor otimização, enquanto o metodo, sera executado o numero de vezes que ele e chamado na aplicação
