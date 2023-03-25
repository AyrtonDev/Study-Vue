let app = new Vue({
  el: '#app',
  data: {
    title: 'Ola Mundo',
    subtitle: 'Este é p <strong>Sub titulo</strong> da página',
    copyright: 'Todos os direitos reservados',
    name: 'Ayrton',
    aviso: true,
    divid: 'qualquer',
    link: 'https://google.com.br',
    link2: 'https://b7web.com.br',
    n: 14,
  },
  methods: {
    clicou: () => {
      alert('Evento funcionou clicou!')
    },
    enviou: () => {
      alert('Enviou!!!')
    },
    teste: () => {
      alert('Teste 1 2 3')
    },
  },
})
