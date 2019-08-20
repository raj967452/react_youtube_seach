import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class VideoListItem extends Component{
    constructor(props){
        super(props);       
    }
    render(){
        const videoInfo = this.props.video.snippet;
        return(
            <ListGroupItem className="collection-item" onClick={() =>this.props.onVideoSelect(this.props.video)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={videoInfo.thumbnails.default.url} />
                    </div>
                    <div className="media-body">
                        <h2 className="media-heading">{videoInfo.title}</h2>
                        <p>{videoInfo.channelTitle}</p>
                    </div>
                </div>
            </ListGroupItem>
        )
    }
}

export default VideoListItem;