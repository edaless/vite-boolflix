<script >

import Film from './components/Film.vue';


import { store } from './store.js';

export default {
  name: "App",
  components: {
    Film
  },
  data() {
    return {
      ricerca: "",
      store
    }
  },

  methods: {
    getMovies() {
      if (this.ricerca !== "") {


        axios
          .get(store.apiURL + store.aggiunta + this.ricerca)
          .then(res => {
            // riempo l'array dello store con i risultati della chiamata api
            store.movieList = res.data.results;

          })
          .catch(err => {
            console.log("errori", err)
          });

        this.ricerca = "";
      };
    }
  }
  // ,
  // mounted() {

  // }
}





</script>

<template>
  <input type="text" v-model="this.ricerca" @keyup.enter="getMovies">
  <button @click="getMovies">ottieni</button>



  <Film v-for="movie in store.movieList" :msg="movie" />

</template>




<style lang="scss" scoped>

</style>
