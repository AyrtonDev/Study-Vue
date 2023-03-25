let app = new Vue({
  el: '#app',
  data: {
    names: [],
    name: '',
    show: false,
    aviso: '',
  },
  methods: {
    addName: function () {
      this.show = false
      this.names.push(this.name)
      this.total += 1
      this.name = ''
    },
    verifyName: function () {
      this.aviso = ''

      if (this.name.length > 2) {
        this.show = true
      } else {
        this.show = false
      }
    },
  },
  watch: {
    name: function () {
      this.aviso = 'Digitando...'

      if (this.timer != null) {
        clearTimeout(this.timer)
      }

      this.timer = setTimeout(this.verifyName, 1000)
    },
  },
})
