const MyNameApp = {
    data(){
        return{
            nome: "Henrique",
            input_nome: ""
        }
    },

    methods: {
        submitForm(e){
            e.preventDefault();

            console.log(this.input_nome);

            this.nome = this.input_nome;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");