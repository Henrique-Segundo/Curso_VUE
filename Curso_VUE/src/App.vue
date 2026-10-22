<template>
  <div>
    <PrimeiroComponente />
    <p>Teste com Ciclo de vida:</p>
    <LifeCycle />
    <p>Teste de formulario e herança:</p>
    <Form />
    <p> Teste de diretivas:</p>
    <p v-if="lendo">Estou lendo</p>
    <p v-else>Não estou lendo</p>
    <p v-show="mostrar">Estou mostrando uma mensagem</p>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Form from './components/Form.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente, LifeCycle, Form
    },
    data(){
      return {
        lendo : false,
        mostrar : true
      }
    }
  }
</script>