import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import VideoListItem from './VideoListItem';


const VideoList = (props) =>{
    const videoItems = props.videos.map((video) => {
        return <VideoListItem 
                    onVideoSelect = {props.onVideoSelect}
                    key={video.etag} video={video}></VideoListItem>
    });
    return(
        <ListGroup>
            <ListGroupItem header="Video PlayList"></ListGroupItem>
            {videoItems}
        </ListGroup>
    )
}

export default VideoList;