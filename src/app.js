const MyNameApp = {
    data(){
        return{
            nome: "Henrique",
            idade: 25
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");