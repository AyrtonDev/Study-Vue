let app = new Vue({
  el: '#app',
  data: {
    nome: 'Ayrton',
  },
  beforeCreate: function () {
    alert('Antes de tudo')
  },
  created: function () {
    alert(this.nome + ' estamos no meio do processo')
  },
  beforeMount: function () {
    alert('está renderizando')
  },
  mounted: function () {
    alert('foi renderizado')
  },
  beforeUpdate: function () {
    alert('antes de ser modificado')
  },
  updated: function () {
    alert('foi alterado')
  },
})

/*
    ciclo de vida

    beforeCreate - onde os elementos não foram criados e nem renderizados
    created - quando os elementos foram criado, mas não renderizados

    beforeMount - antes de renderizar na tela
    mounted - elemento ja renderizado

    beforeUpdate - antes do elemento ser modificado
    update - quando o elemento e modificado o elemento e rodado novameto

    beforeDestroy
    destroyed
*/
