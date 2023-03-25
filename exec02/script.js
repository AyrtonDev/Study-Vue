let app = new Vue({
  el: '#app',
  data: {
    names: [],
    total: 0,
    name: '',
  },
  methods: {
    addName: function () {
      if (this.name) {
        this.names.push(this.name)
        this.total += 1
        this.name = ''
      }
    },
  },
})
