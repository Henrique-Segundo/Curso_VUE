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
    <button @click="toggleMostrar"> {{btnText}} </button>
    <p v-show="mostrar">Estou mostrando uma mensagem</p>
    <p> Teste de bind:</p>
    <Bind />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Form from './components/Form.vue'
  import Bind from './components/Forms/Bind.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente, LifeCycle, Form, Bind
    },
    data(){
      return {
        lendo : false,
        mostrar : false,
        btnText : "Clique para mostrar a mensagem"
      }
    },
    methods: {
      toggleMostrar() {
        this.mostrar = !this.mostrar;
        this.btnText = this.mostrar ? "Clique para ocultar a mensagem" : "Clique para mostrar a mensagem";
      }
    }
  }
</script>