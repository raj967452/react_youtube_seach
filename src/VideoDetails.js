import React, { Component } from 'react';

import {ResponsiveEmbed} from 'react-bootstrap';


const VideoDetails= ({video}) => {
    if(!video){
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div>
            <ResponsiveEmbed a16by9>
                <iframe src={url}></iframe>
            </ResponsiveEmbed>
            <div>
                <h1>{video.snippet.title}</h1>
                <div>
                {video.snippet.description}
                </div>
            </div>
        </div>
    )
}

export default VideoDetails;