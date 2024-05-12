import React from 'react';
import loading from '../../../public/loading.gif';
import Image from "next/image";


const Loading = () => {
    return (
        <div className="w-full h-screen bg-black">
            <div className="flex justify-center items-center pt-80 sm:pt-96 sm:ml-0">
                <Image src={loading} alt=""/>
            </div>
        </div>
    );
};

export default Loading;