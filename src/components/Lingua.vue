<script>

export default {
    name: "Lingua",
    props: ["sigla"]


}




</script>

<template>

    <!-- <span class="container"> -->




    <div class="language">
        <!-- 
                immagine della bandiera che vado a prendere su questo sito, 
                alcune lingue hanno la sigla diversa,
                in cui devo aggiungere la sigla e .png
            -->
        <img :src="'https://gds.baguette.engineering/flags/' + (
            sigla === 'en' ? 'gb' :
                sigla === 'ja' ? 'jp' :
                    sigla === 'da' ? 'dk' :
                        sigla === 'cs' ? 'cz' :
                            sigla === 'ko' ? 'kr' :
                                sigla === 'hi' ? 'in' :
                                    sigla === 'xx' ? 'gb' :
                                        // The Adventures of André and Wally B., secondo wikipedia, è in inglese ma l'api dice che è in xx
                                        sigla
        ) + '.png'" :alt="
    sigla === 'ta' ? 'Tamil' :
        sigla === 'te' ? 'Telugu' :
            sigla
" :class="
    sigla === 'en' ? 'inglese' :
        sigla === 'sh' ? 'inglese' :
            sigla === 'xx' ? 'inglese' :
''">
        <!-- 
                se proprio non c'è la bandiera scrivo la sigla (:alt= sigla ),
                se invece è una delle lingue indiane che ho riscontrato:
                la scrivo per intero
            -->
        <!-- la bandiera inglese è un po' schiacciata, le aggiungo la classe: inglese
             sh non lo so, tale film "H-8" è in lingua sh, e il sito delle bandiere lo prende come inglese.
        -->
    </div>




    <!-- </span> -->
</template>

<style  lang="scss"  scoped>
.container {

    // background-color: aqua;
    // margin: 20px;
    display: flex;
    flex-direction: column;
}



.language {
    width: 20px;
    // height: 20px;
    // background-color: red;

    img {
        width: 100%;

    }
}

.inglese {
    height: 15px;
}
</style>
