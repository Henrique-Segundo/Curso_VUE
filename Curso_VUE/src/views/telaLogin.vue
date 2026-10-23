<template>
  <div>
        <Header />
        <p> Tela Login </p>
        <Footer />
  </div>
</template>

<script>

import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"

export default {
  name: "telaLogin",
  components: {
    Header,
    Footer
  }
}

</script>