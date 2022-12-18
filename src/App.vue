<script >

import HelloWorld from './components/HelloWorld.vue';

import { store } from './store.js';

export default {
  name: "App",
  components: {

  },
  data() {
    return {
      store
    }
  },

  methods: {
    getMovies() {



      axios
        .get(store.apiURL + store.aggiunta + "pirati")
        .then(res => {
          // riempo l'array dello store con i risultati della chiamata api
          store.movieList = res.data.results;
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
  <HelloWorld />
</template>

<style lang="scss" scoped>

</style>
