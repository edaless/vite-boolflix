<script>

import Lingua from './Lingua.vue';

export default {
    name: "Film",
    components: {
        Lingua
    },
    props: ["msg", "tipo"]


}




</script>

<template>
    <span class="container">

        <span>{{ tipo === "film" ? msg.title : msg.name }}</span>
        <span>{{ tipo === "film" ? msg.original_title : msg.original_name }}</span>

        <Lingua :sigla="msg.original_language" />

        <span>{{ msg.vote_average }}</span>




        <!-- span per stampare se un elemento è un film o serie. Può tornare utile -->
        <span>{{ tipo }}</span>

    </span>
</template>

<style lang="scss" scoped>
.container {
    background-color: aqua;
    margin: 20px;
    display: flex;
    flex-direction: column;
}
</style>
