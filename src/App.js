import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from "youtube-api-search";
import logo from './logo.svg';
import './App.css';

import {Grid, Jumbotron, Row, Col, Navbar} from 'react-bootstrap';


import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails'

const API_KEY= 'AIzaSyAlT6KbzGske9ixwCxjA_79jrWR8k0k65o';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('reactJS');
    
  }
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
          videos: videos,
          selectedVideo: videos[0]
        })
    })
  }
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={logo} className="App-logo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <SearchBar onSearchTermChange={videoSearch}></SearchBar>               
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row>
            <Col md={8} sm={12}>
              <VideoDetails video={this.state.selectedVideo}></VideoDetails>
            </Col>
            <Col md={4} sm={12}>
              <VideoList 
              onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}></VideoList>            
            </Col>            
          </Row>
        </Grid>
      </div>
    );
  }
};


export default App;
