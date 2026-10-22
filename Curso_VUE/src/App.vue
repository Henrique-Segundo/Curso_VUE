<template>
  <div>
    <PrimeiroComponente />
    <p>Mesmo a raiz ainda é considerada componente</p>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente
    }
  }
</script>