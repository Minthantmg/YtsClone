import {useQuery} from "@tanstack/react-query";
import {get4KMovies, getALlMovies, getRankingMovies, getTrendingMovies} from "../apis/movies";

const useGetMoviesList = () =>{
    return useQuery({
        queryKey:['get','list_movies'],
        queryFn: getALlMovies
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

export const useMovies = () =>{
    return {
        useGetMoviesList,
        useGet4KMoviesList,
        useGetRankingMoviesList,
        useGetTrendingMoviesList,
    }
}

