<template>
  <div>
    <p>Teste de Hiperlink: <a v-bind:href="link" target="_blank">Clique aqui</a></p>
    <img v-bind:src="imagem" alt="Imagem" />
  </div>
</template>

<script>
  export default {
    name: 'Bind',
    data(){
      return {
        link : "https://www.google.com",
        imagem: "public/img/imagem.png"
      }
    }
  }
</script>