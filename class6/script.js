let app = new Vue({
  el: '#app',
  data: {
    isActive: false,
    errorMsg: '',
    errorType: '',
    win: false,
    objeto: {
      nome: 'Ayrton',
      idade: '99',
      pai: 'Fulano',
      mae: 'Ciclana',
    },
    names: ['Ayrton', 'Victor', 'Marli'],
  },
  computed: {
    errorDivClass: function () {
      let r = {
        ativo: false,
      }

      if (this.errorMsg != '') {
        r.ativo = true
      }

      if (this.errorType == 'warning') {
        r.warning = true
        r.error = false
      } else if (this.errorType == 'error') {
        r.warning = false
        r.error = true
      }

      return r
    },
  },
  methods: {
    shoWarning: function (msg) {
      this.errorMsg = msg
      this.errorType = 'warning'
    },
    showError: function (msg) {
      this.errorMsg = msg
      this.errorType = 'error'
    },
    hideError: function () {
      this.errorMsg = ''
    },
  },
})
