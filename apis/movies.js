import {axiosInstance} from "../utils/axiosInstance";

export const getALlMovies = async (currentPage) => {
    try {
        const res = await axiosInstance.get(`list_movies.json?page=${currentPage}&limit=24`)
        return res.data.data.movies;
    } catch (e) {
        throw e;
    }
}

export const get4KMovies = async (currentPage4k) => {
    try {
        const res = await axiosInstance.get(`list_movies.json?quality=4k&page=${currentPage4k}&limit=24`)
        return res.data.data.movies
    } catch (e) {
        throw e;
    }
}

export const getRankingMovies = async (currentPageRanking) => {
    try {
        const res = await axiosInstance.get(`list_movies.json?sort_by=rating&page=${currentPageRanking}&limit=24`)
        return res.data.data.movies
    } catch (e) {
        throw e;
    }
}

export const getTrendingMovies = async (currentPageTrending) => {
    try {
        const res = await axiosInstance.get(`list_movies.json?sort_by=download_count&page=${currentPageTrending}&limit=24`)
        return res.data.data.movies
    } catch (e) {
        throw e;
    }
}

export const getMovieDetailById = async (movieId) => {
    try {
        const res = await axiosInstance.get(`movie_details.json?movie_id=${movieId}`);
        return res.data.data.movie; // Update to access the 'movie' property directly
    } catch (e) {
        throw e;
    }
};

export const getSimilarMovies = async (similarMovieId) => {
    try {
        const res = await axiosInstance.get(`movie_suggestions.json?movie_id=${similarMovieId}`);
        return res.data.data.movies; // Update to access the 'movie' property directly
    } catch (e) {
        throw e;
    }
};

export const getMovieSearchText = async (searchText) => {
    try {
        if (!searchText) {
            return [];
        }
        const res = await axiosInstance.get(`list_movies.json?limit=4&query_term=${searchText}`);
        return res.data.data.movies; // Update to access the 'movie' property directly
    } catch (e) {
        throw e;
    }
};

