'use client'
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import axios from "axios";
import loading from "../../../../public/loading.gif";
import Link from "next/link";
import star from "../../../../public/yellowStar.svg";
import Nav from "@/app/nav/nav";
import Footer from "@/app/footer/footer";
import Pagination from "@/app/pagination/pagination";
import Image from "next/image";

const Page = () => {
    const {moviesearch} = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${currentPage}&query_term=${moviesearch}`);
                setMovies(res.data.data.movies);
                setTotalPages(Math.ceil(res.data.data.movie_count / res.data.data.limit));
                setIsLoading(false);
                setIsError(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        };

        fetchData();
    }, [currentPage, moviesearch]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            {isLoading && (
                <div className="flex justify-center items-center mt-48 ml-12">
                    <Image src={loading} alt=""/>
                </div>
            )}
            {isError && <p>Error fetching data</p>}
            {!isLoading && !isError && (
                <>
                    <Nav/>
                    <div className="flex flex-wrap bg-black">
                        {movies && movies.map((movie, index) => (
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
                                                    <div className="mb-4 mt-12 flex justify-center items-center">
                                                        <Image src={star} alt="" className="w-6 h-6"/>
                                                    </div>
                                                    {movie.rating} / 10
                                                    <div className="text-2xl font-bold">
                                                        {movie.genres[0]}
                                                    </div>
                                                    <div className="text-2xl font-bold">
                                                        {movie.genres[1]}
                                                    </div>
                                                    <div>
                                                        <button className="bg-green-500 px-2 py-2 mt-6 rounded-sm">
                                                            View Detail
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <div className="ml-3 text-xs mt-2 font-bold text-white">
                                    <div>{movie.title}</div>
                                </div>
                                <div className="ml-3 text-xs font-bold text-gray-300">
                                    <div>{movie.year}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                    />

                    <div className="">
                        <Footer/>
                    </div>
                </>
            )}
        </div>
    );
};


export default Page;