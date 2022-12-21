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
    getMoviesSeries() {
      if (this.ricerca !== "") {

        // richiesta movies


        axios
          .get(store.movieURL + store.aggiunta + this.ricerca)

          .then(res => {
            // riempo l'array dello store con i risultati della chiamata api
            store.movieList = res.data.results;

          })
          .catch(err => {
            console.log("errori", err)
          });




        // richiesta serie tv
        axios
          .get(store.serieURL + store.aggiunta + this.ricerca)

          .then(res => {
            // AGGIUNGO all'array delle serie dello store i risultati della chiamata
            store.serieList = res.data.results;

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
  <input type="text" v-model="this.ricerca" @keyup.enter="getMoviesSeries">
  <button @click="getMoviesSeries">ottieni</button>



  <Film v-for="movie in (store.movieList)" :msg="movie" />
  <!-- anche per le serie uso il componente che si chiama Film -->
  <Film v-for="serie in (store.serieList)" :msg="serie" />

</template>




<style lang="scss" scoped>

</style>
