<script>
import Lingua from './Lingua.vue';

export default {
    name: "Film",
    props: ["msg"]


}




</script>

<template>
    <span class="container">



        <span>{{ msg.title }}</span>
        <span>{{ msg.original_title }}</span>
        <Lingua :sigla="msg.original_language" />
        <Lingua />














        <span>{{ msg.vote_average }}</span>

    </span>
</template>

<style lang="scss" scoped>
.container {
    background-color: aqua;
    margin: 20px;
    display: flex;
    flex-direction: column;
}



.language {
    width: 20px;

    img {
        width: 100%;

    }
}
</style>
