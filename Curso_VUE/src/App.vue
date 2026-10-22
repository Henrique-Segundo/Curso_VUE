<template>
  <div>
    <PrimeiroComponente />
    <p>Teste com Ciclo de vida:</p>
    <LifeCycle />
    <p>Teste de formulario e herança:</p>
    <Form />
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
    }
  }
</script>