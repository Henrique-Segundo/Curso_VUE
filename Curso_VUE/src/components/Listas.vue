<template>
  <div>
    <h1> Teste de Listas:</h1>
    <ul>
      <li v-for="(item, index) in listaArray" :key="index">
        {{ item }}
      </li>
    </ul>

    <ul>
      <li v-for="item in listaObj" :key="item.id">
        {{ item.nome }}
      </li>
    </ul>
  </div>
</template> 

<script>
export default {
    data() {
        return {
            listaArray: ["Henrique", "Eduardo", "Lucas"],
            listaObj: [
                { id: 1, nome: "Henrique" },
                { id: 2, nome: "Eduardo" },
                { id: 3, nome: "Lucas" }
            ]
        }
    }
}
</script>