'use client'
import React from 'react';
import Nav from "@/app/nav";
import Footer from "@/app/footer";
import {useMovies} from "../../../hooks/useMovies";
import Image from "next/image";
import star from "../../../public/yellowStar.svg";
import Link from "next/link";

const Page = () => {
    const {useGetRankingMoviesList} = useMovies()
    const {data: movies, isLoading, isError, isSuccess} = useGetRankingMoviesList()
    return (
        <div>
            {isLoading && (
                <div>
                    Loading ...
                </div>
            )}
            {isSuccess && (
                <>
                    <Nav/>
                    <div className="flex justify-center w-full h-full">
                        <div className="w-full max-w-7xl">
                            <div className="border-b">
                                <div className="hidden sm:block text-center font-sans text-lg mt-4 ml-36 mr-36 mb-4">
                                    Most Famous YIFY Movies
                                </div>
                            </div>
                            <div className="flex flex-wrap relative">
                                {movies.map((movie, index) => (
                                    <div key={index} className="w-1/2 mt-2 sm:w-1/6 md:w-1/4 lg:w-1/6">
                                        <Link legacyBehavior={true} href={`/detail/${movie.id}`}>
                                            <a>
                                                <div
                                                    className="relative group shadow-lg rounded-lg border-4 border-black hover:border-green-400 ml-2 mt-2 mr-2 w-fit">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={movie.medium_cover_image}
                                                        alt={movie.title}
                                                        className="h-fit w-fit rounded-sm"
                                                    />
                                                    <div
                                                        className="absolute inset-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-full group-hover:translate-y-0 scale-y-0 group-hover:scale-y-100 bg-black bg-opacity-50">
                                                        <div className="text-white text-center">
                                                            <div
                                                                className="mb-4 mt-12 flex justify-center items-center">
                                                                <Image src={star} alt="" className="w-6 h-6"/>
                                                            </div>
                                                            {movie.rating} / 10
                                                            <div className="text-2xl font-bold">
                                                                {movie.genres && movie.genres.length > 0 ? movie.genres[0] : 'No Genre'}
                                                            </div>
                                                            <div className="text-2xl font-bold">
                                                                {movie.genres && movie.genres.length > 0 ? movie.genres[1] : 'No Genre'}
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className="bg-green-500 px-2 py-2 mt-6 rounded-sm">
                                                                    View Detail
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ml-3 text-xs mt-2 font-bold">
                                                    <div>{movie.title}</div>
                                                </div>
                                                <div className="ml-3 text-xs font-bold text-gray-300">
                                                    <div>{movie.year}</div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </>
            )}
        </div>
    );
};

export default Page;