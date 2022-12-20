import { reactive } from 'vue'

export const store = reactive({

    movieList: [],




    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=762f05a608c3c21a8a20cd2992fa2b91",

    aggiunta: "&query=",
    titolo: "Boolix"

});

