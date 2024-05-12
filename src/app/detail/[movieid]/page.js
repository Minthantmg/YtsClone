'use client'
import React, {useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import {useMovies} from "../../../../hooks/useMovies";
import Link from "next/link";
import heart from "../../../../public/heart.svg";
import download from "../../../../public/download.svg";
import imdb from "../../../../public/imdb.png";
import file from "../../../../public/file.svg";
import screen from "../../../../public/fullscreen.svg";
import sound from "../../../../public/sound.svg";
import subtitle from "../../../../public/subtitles.svg";
import Nav from "@/app/nav/nav";
import YouTubeVideo from '../../video/video';
import Image from "next/image";
import Loading from "@/app/loading/loading";

const SimilarMovieCard = ({similarMovie}) => {
    return (
        <div className="w-1/2 mt-2 ml-2 sm:w-1/3 sm:flex">
            <Link legacyBehavior={true} href={`/detail/${similarMovie.id}`}>
                <a>
                    <div className="shadow-lg rounded-lg border-4 border-white ml-2 mt-2 mr-2 w-fit h-fit flex">
                        <img
                            src={similarMovie.medium_cover_image}
                            alt={similarMovie.title}
                            width={200}
                            height={200}
                            className="h-fit w-fit rounded-sm"
                        />
                    </div>
                </a>
            </Link>
        </div>
    );
};
const Page = () => {
    const {movieid} = useParams();
    const [selectedTorrentIndex, setSelectedTorrentIndex] = useState(0);
    const router = useRouter();

    const {useGetMovieById} = useMovies();
    const {data: movie, isLoading, isError, isSuccess} = useGetMovieById(movieid);
    console.log(movie)
    const selectedTorrent = movie?.torrents[selectedTorrentIndex];

    const {useGetSimilarMovies} = useMovies()
    const {data: similarMovies} = useGetSimilarMovies(movieid);

    const handleTorrentClick = (index) => {
        setSelectedTorrentIndex(index);
    };

    const redirectToIMDB = (imdbCode) =>{
        const imdbUrl = `https://www.imdb.com/title/${imdbCode}/`;
        router.push(imdbUrl)
    }

    return (
        <div>
            {isLoading && <div><Loading /></div>}
            {isError && <div>Error</div>}
            {isSuccess && (
                <div>
                    <Nav/>
                    <div className="flex justify-center w-full min-h-screen bg-black">
                        <div className="w-full max-w-7xl">
                            <div className="mt-4 ml-3 sm:hidden">
                                <div className="font-bold text-xl font-sans text-white">
                                    {movie.title}
                                </div>
                                <div className="font-bold text-lg font-sans text-white">
                                    {movie.year}
                                </div>
                                <div className="font-bold text-lg font-sans text-white">
                                    {movie.genres.join(' / ')}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2 mt-4 ml-2 sm:w-1/5">
                                    <div
                                        className="shadow-lg rounded-lg border-4 border-white ml-2 mt-2 mr-2 w-fit h-fit">
                                        <img src={movie.medium_cover_image}
                                             alt={movie.title}
                                             className="h-[300px] w-fit rounded-sm"/>
                                    </div>
                                </div>
                                <div className="w-1/2 sm:w-2/5 sm:mt-4">
                                    <div className="ml-3 sm:block hidden">
                                        <div className="font-bold text-4xl font-sans text-white">
                                            {movie.title}
                                        </div>
                                        <div className="font-bold text-lg font-sans mt-2 text-white">
                                            {movie.year}
                                        </div>
                                        <div className="font-bold text-lg font-sans text-white">
                                            {movie.genres.join(' / ')}
                                        </div>
                                    </div>
                                    <div className="flex mt-3">
                                        <div className="ml-4">
                                            <Image src={heart} alt=""/>
                                        </div>
                                        <div className="ml-12 text-white">
                                            {movie.like_count}
                                        </div>
                                    </div>
                                    <div className="text-green-300 text-xs ml-3 mt-2">
                                        ratings
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="ml-3 w-10 h-10 cursor-pointer">
                                            <Image src={imdb} alt="" onClick={() => redirectToIMDB(movie.imdb_code)}/>
                                        </div>
                                        <div className="ml-9 text-white">
                                            {movie.rating} <span className="text-sm text-gray-200">/10</span>
                                        </div>
                                    </div>
                                    <div>
                                        {movie.torrents.map((torrent, index) => (
                                            <a
                                                key={index}
                                                href={torrent.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <button
                                                    className="border border-white pl-2 pr-4 ml-3 mt-1 w-40 hover:border-green-400">
                                                    <div className="flex">
                                                        <Image src={download} alt=""/>
                                                        <div className="flex justify-center items-center ml-2 text-sm text-white">
                                                            {`${torrent.quality}.${torrent.type.toUpperCase()}`}
                                                        </div>
                                                    </div>
                                                </button>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                {/*to change*/}
                                <div className="hidden sm:block sm:w-3/5">
                                    <div className="mt-6 ml-2 font-bold text-xl hidden sm:block text-white">
                                        Similar Movies
                                    </div>
                                    <div className="hidden sm:mt-6 sm:flex cursor-pointer">
                                        {similarMovies && similarMovies.map((similarMovie, index) => (
                                            <SimilarMovieCard key={similarMovie.id} similarMovie={similarMovie}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 ml-4 hidden sm:flex">
                                <div className="flex h-80">
                                    <div className="ml-3">
                                        <YouTubeVideo videoId={movie.yt_trailer_code}/>
                                    </div>
                                    <div className="ml-2">
                                        <img src={movie.background_image} alt="" className="w-96 h-4/5"/>
                                    </div>
                                    <div className="ml-2">
                                        <img src={movie.background_image_original} alt="" className="w-96 h-4/5"/>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-4">
                                <div className="text-lg font-bold mt-4 text-white">
                                    Plot summary
                                </div>
                                <div className="text-sm mt-2 font-sans mr-2 text-white">
                                    {movie.description_intro}
                                </div>
                                <div className="mt-4 font-sm font-sans mb-2 text-white">
                                    Uploaded Date : {movie.date_uploaded}
                                </div>
                            </div>
                            <div className="flex flex-wrap border-t border-b boder-black">
                                {movie.torrents.map((torrent, index) => (
                                    <div key={index} className="w-1/3 p-2">
                                        <div
                                            className={`flex justify-center items-center text-white hover:text-green-500 ${index === selectedTorrentIndex ? 'text-green-500' : ''}`}
                                            onClick={() => handleTorrentClick(index)}
                                            style={{cursor: 'pointer'}}
                                        >
                                            {`${torrent.quality}.${torrent.type.slice(0, 3).toUpperCase()}`}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="ml-6 mt-6 mr-6 sm:flex sm:justify-start sm:items-center sm:border-b sm:ml-0 sm:mr-0">
                                <div className="flex border-b pb-6 sm:ml-12 sm:border-b-0">
                                    <Image src={file} alt=""/>
                                    <div className="ml-4 sm:mt-1 sm:ml-6 text-white">
                                        {selectedTorrent.size}
                                    </div>
                                </div>
                                <div className="flex border-b pb-6 pt-6 sm:ml-56 sm:mb-6 sm:border-b-0">
                                    <Image src={screen} alt="" className="w-6 h-6"/>
                                    <div className="ml-4 text-white">
                                        {selectedTorrent.quality}
                                    </div>
                                </div>
                                <div className="flex border-b pb-6 pt-6 sm:ml-56 sm:mb-6 sm:border-b-0">
                                    <Image src={sound} alt=""/>
                                    <div className="ml-4 text-white">
                                        English {selectedTorrent.audio_channels}
                                    </div>
                                </div>
                                <div className="flex pb-6 pt-6 sm:ml-56 sm:mb-6 sm:border-b-0">
                                    <Image src={subtitle} alt="" className="w-6 h-6"/>
                                    <div className="ml-4 font-bold text-green-500">
                                        Subtitles
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;