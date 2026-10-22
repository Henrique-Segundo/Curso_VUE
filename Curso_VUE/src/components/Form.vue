<template>
  <div>
    <form action="" @submit="enviarfomulario($event)">
    <div>
        <input type="text" v-model="nome">
    </div>
    <div>
        <input type="text" v-model="senha">
    </div>
    <div>
        <input type="text" v-model="email">
    </div>
    <div>
        <Submit />
    </div>
    </form>
  </div>
</template>

<script>
    import InputText from './Forms/InputText.vue';
    import Submit from './Forms/Submit.vue';

  export default {
    name: "Form",
    components: {
      InputText, Submit
    },
    data(){
      return {
        nome: "",
        email: "",
        senha: ""
      }
    },
    methods: {
      enviarfomulario(e) {
        e.preventDefault();

        const nome = this.nome;
        const email = this.email;
        const senha = this.senha;

        console.log("Nome: " + nome);
        console.log("Email: " + email);
        console.log("Senha: " + senha);

        console.log("Formulário enviado!");
      }
    }
  }
</script>