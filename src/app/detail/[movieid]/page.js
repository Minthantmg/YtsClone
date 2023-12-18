'use client'
import React from 'react';
import {useParams} from "next/navigation";
import {axiosInstance} from "../../../../utils/axiosInstance";
import {useMovies} from "../../../../hooks/useMovies";

const Page = () => {
    const {movieid} = useParams();

    const { useGetMovieById } = useMovies();
    const { data: movie, isLoading, isError, isSuccess } = useGetMovieById(movieid);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}
            {isSuccess && <div>{movie.id} - {movie.title}</div>}
        </div>
    );
};

export default Page;