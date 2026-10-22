<template>
  <div>
    <PrimeiroComponente />
    <p>Mesmo a raiz ainda é considerada componente</p>
    <LifeCycle />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente, LifeCycle
    }
  }
</script>