import {useQuery} from "@tanstack/react-query";
import {get4KMovies, getALlMovies, getMovieDetailById, getRankingMovies, getTrendingMovies} from "../apis/movies";

const useGetMoviesList = (currentPage) =>{
    return useQuery({
        queryKey:['get','list_movies',currentPage],
        queryFn: () => getALlMovies(currentPage),
        keepPreviousData: true,
    })
}

const useGet4KMoviesList = () =>{
    return useQuery({
        queryKey:['get','4k_list_movies'],
        queryFn: get4KMovies
    })
}

const useGetRankingMoviesList = () =>{
    return useQuery({
        queryKey:['get','ranking_list_movies'],
        queryFn: getRankingMovies
    })
}

const useGetTrendingMoviesList = () =>{
    return useQuery({
        queryKey:['get','trending_list_movies'],
        queryFn: getTrendingMovies
    })
}

const useGetMovieById = (movieId) => {
    return useQuery({
        queryKey: ['get', 'movie_detail', movieId],
        queryFn: () => getMovieDetailById(movieId),
    });
};

export const useMovies = () =>{
    return {
        useGetMoviesList,
        useGet4KMoviesList,
        useGetRankingMoviesList,
        useGetTrendingMoviesList,
        useGetMovieById,
    }
}

