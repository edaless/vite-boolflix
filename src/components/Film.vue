<script>

export default {
    name: "Film",
    props: ["msg"]


}




</script>

<template>
    <span class="container">



        <span>{{ msg.title }}</span>
        <span>{{ msg.original_title }}</span>
        <div class="language">
            <!-- 
                immagine della bandiera che vado a prendere su questo sito, 
                alcune lingue hanno la sigla diversa,
                in cui devo aggiungere la sigla e .png
            -->
            <img :src="'https://gds.baguette.engineering/flags/' + (
                msg.original_language === 'en' ? 'gb' :
                    msg.original_language === 'ja' ? 'jp' :
                        msg.original_language === 'da' ? 'dk' :
                            msg.original_language === 'cs' ? 'cz' :
                                msg.original_language === 'ko' ? 'kr' :
                                    msg.original_language === 'hi' ? 'in' :
                                        msg.original_language === 'xx' ? 'gb' :
            // The Adventures of André and Wally B., secondo wikipedia, è in inglese ma l'api dice che è in xx
            msg.original_language) + '.png'" :alt="
    msg.original_language === 'ta' ? 'tamil' :
                                ">
            <!-- 
                se proprio non c'è la bandiera scrivo la sigla (:alt="msg.original_language"),
                se invece è una delle 400 lingue indiane che ho riscontrato:
                la scrivo per intero
            -->
        </div>













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
