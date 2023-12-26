import React from 'react';
import YouTube from "react-youtube";

const Video = ({ videoId }) => {
    const opts = {
        height: '257',
        width: '450',
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <div>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
};

export default Video;