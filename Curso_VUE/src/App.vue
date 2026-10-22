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
    <Listas />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Form from './components/Form.vue'
  import Bind from './components/Bind.vue'
  import Listas from './components/Listas.vue';

  export default {
    name: 'App',
    components: {
      PrimeiroComponente, LifeCycle, Form, Bind, Listas
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

<style>
  /* recomendação automatica so para teste  */
  p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #105010;
  }

  h1 {
    color: #f00020;
    font-size: 24px;
  }

  button {
    margin-top: 10px;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
  }

  </style>