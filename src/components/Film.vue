<script>

import Lingua from './Lingua.vue';
import { store } from '../store.js';

export default {
    name: "Film",
    components: {
        Lingua
    },
    props: ["msg", "tipo"],
    data() {
        return {
            store
        }
    }



}



</script>

<template>
    <span class="container">



        <img :src="store.imageURL + msg.poster_path" alt="">

        <div class="dati">


            <span>
                <strong>
                    Titolo:
                </strong>
                {{ tipo === "film" ? msg.title : msg.name }}
            </span>

            <span>
                <strong>
                    Titolo originale:
                </strong>
                {{ tipo === "film" ? msg.original_title : msg.original_name }}
            </span>

            <Lingua :sigla="msg.original_language" />


            <!-- <span v-for="Math.ceil((msg.vote_average / 2))">r</span> -->
            <div>
                <strong>Voto: </strong>
                <span v-if="Math.ceil((msg.vote_average / 2)) === 1">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-else-if="Math.ceil((msg.vote_average / 2)) === 2">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-else-if="Math.ceil((msg.vote_average / 2)) === 3">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-else-if="Math.ceil((msg.vote_average / 2)) === 4">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-else>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>

            </div>

            <!-- span per stampare se un elemento è un film o serie. Può tornare utile -->
            <span>{{ tipo }}</span>
        </div>

    </span>
</template>

<style lang="scss" scoped>
$h-container: 200px;
$w-container: $h-container * 0.67;

.container {
    background-color: aqua;
    margin: 20px;
    display: flex;
    flex-direction: column;

    height: $h-container;
    width: $w-container;

    &:hover .dati {
        padding: 20px 5px;
        color: white;
        font-size: 10px;
        height: $h-container;
        width: $w-container;
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: rgb(0, 0, 0);

        * {
            margin-top: 5px;
        }

        span {

            i {
                color: yellow;
            }
        }


    }



    img {
        height: 100%;
        width: auto;
    }

    .dati {
        display: none;
    }
}
</style>
