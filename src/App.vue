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



      axios
        .get(store.apiURL + store.aggiunta + "pirati+dei+caraibi")
        .then(res => {
          // riempo l'array dello store con i risultati della chiamata api
          store.movieList = res.data.results;
          // console.log(store.movieList.length);
          console.log(store.movieList);
        })
        .catch(err => {
          console.log("errori", err)
        });

    }
  },
  mounted() {
    this.getMovies();
  }
}





</script>

<template>
  <input type="text" v-model="ricerca">

  <Film v-for="movie in store.movieList" :msg="movie" />
  <!-- <Film v-for="(movie, index) in store.movieList" :msg="store.movieList[index]" /> -->
</template>

<style lang="scss" scoped>

</style>
