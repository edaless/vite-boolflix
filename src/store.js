import { reactive } from 'vue'

export const store = reactive({


    movieList: [],
    serieList: [],




    movieURL: "https://api.themoviedb.org/3/search/movie?api_key=762f05a608c3c21a8a20cd2992fa2b91",
    serieURL: "https://api.themoviedb.org/3/search/tv?api_key=762f05a608c3c21a8a20cd2992fa2b91&language=it_IT",


    imageURL: "https://image.tmdb.org/t/p/w342",


    aggiunta: "&query=",




    titolo: "Boolix"

});

