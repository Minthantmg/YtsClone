import {useQuery} from "@tanstack/react-query";
import {
    get4KMovies,
    getALlMovies,
    getMovieDetailById, getMovieSearchText,
    getRankingMovies,
    getSimilarMovies,
    getTrendingMovies
} from "../apis/movies";

const useGetMoviesList = (currentPage) =>{
    return useQuery({
        queryKey:['get','list_movies',currentPage],
        queryFn: () => getALlMovies(currentPage),
        keepPreviousData: true,
    })
}

const useGet4KMoviesList = (currentPage4k) =>{
    return useQuery({
        queryKey:['get','4k_list_movies',currentPage4k],
        queryFn: () => get4KMovies(currentPage4k),
    })
}

const useGetRankingMoviesList = (currentPageRanking) =>{
    return useQuery({
        queryKey:['get','ranking_list_movies',currentPageRanking],
        queryFn: () => getRankingMovies(currentPageRanking),
    })
}

const useGetTrendingMoviesList = (currentPageTrending) =>{
    return useQuery({
        queryKey:['get','trending_list_movies',currentPageTrending],
        queryFn: () => getTrendingMovies(currentPageTrending),
    })
}

const useGetMovieById = (movieId) => {
    return useQuery({
        queryKey: ['get', 'movie_detail', movieId],
        queryFn: () => getMovieDetailById(movieId),
    });
};

const useGetSimilarMovies = (similarMoviesId) => {
    return useQuery({
        queryKey: ['get', 'similarMovies', similarMoviesId],
        queryFn: () => getSimilarMovies(similarMoviesId),
    });
};

const useGetSearchText = (searchText) => {
    return useQuery({
        queryKey: ['get', 'searchText', searchText],
        queryFn: () => getMovieSearchText(searchText),
    });
};

export const useMovies = () =>{
    return {
        useGetMoviesList,
        useGet4KMoviesList,
        useGetRankingMoviesList,
        useGetTrendingMoviesList,
        useGetMovieById,
        useGetSimilarMovies,
        useGetSearchText,
    }
}

