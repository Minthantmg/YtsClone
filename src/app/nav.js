import React, {useEffect, useState} from 'react';
import Yts from '../../public/yts.png';
import search from '../../public/search.svg';
import fourK from '../../public/4k.png';
import ranking from '../../public/ranking.png';
import trend from '../../public/trend.svg';
import Image from "next/image";
import {useRouter} from 'next/navigation';
import Link from "next/link";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const Nav = () => {
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/4k')
        router.prefetch('/ranking')
        router.prefetch('/trend')
        router.prefetch('/home')
    }, []);
    return (
        <div className="bg-black">
            <div className="flex justify-between border-b">
                <Image src={Yts} alt="" className="w-24 h-10 mt-2 sm:ml-20 ml-2 mb-2 cursor-pointer"
                       onClick={() => router.push('/home')}/>
                <div className="text-gray-400 mt-3 -ml-96 text-lg">
                    HD movies at the smallest file size.
                </div>
                <div className="flex justify-center items-center sm:mr-16 ">
                    <div className="sm:hidden">
                        <Image src={search} alt="" className="w-8 h-8"/>
                    </div>
                    <div className="relative">
                        <input type="search" className="border mr-6 w-72 px-2 py-1 rounded-lg hidden sm:block"
                               placeholder="Quick search"/>
                    </div>
                    <div className="sm:hidden">
                        <Image src={fourK} alt="" className="w-8 h-8 ml-2" onClick={() => router.push('/4k')}/>
                    </div>
                    <div className="hidden sm:block mr-4 cursor-pointer text-gray-400" onClick={() => router.push('/4k')}>
                        4k
                    </div>
                    <div className="sm:hidden">
                        <Image src={ranking} alt="" className="w-8 h-8 ml-2" onClick={() => router.push('/ranking')}/>
                    </div>
                    <div className="hidden sm:block mr-4 cursor-pointer text-gray-400" onClick={() => router.push('/ranking')}>
                        Ranking
                    </div>
                    <div className="sm:hidden">
                        <Image src={trend} alt="" className="w-8 h-8 ml-2 mr-2" onClick={() => router.push('/trend')}/>
                    </div>
                    <div className="hidden sm:block cursor-pointer mr-4 text-gray-400" onClick={() => router.push('/trend')}>
                        Trending
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
