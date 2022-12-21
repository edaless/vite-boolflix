<script>

export default {
    name: "Lingua",
    props: ["sigla"]


}




</script>

<template>
    <h2>ffff</h2>
    <span class="container">

        <h2>{{ sigla }}</h2>
        <h2> ddd </h2>


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
">
            <!-- 
                se proprio non c'è la bandiera scrivo la sigla (:alt= sigla ),
                se invece è una delle lingue indiane che ho riscontrato:
                la scrivo per intero
            -->
        </div>




    </span>
</template>

<style lang="scss" scoped>
.container {
    width: 100px;
    height: 100px;
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
