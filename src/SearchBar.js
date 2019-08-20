import React, { Component } from 'react';

import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }
    onInputChange(term){
        this.setState({ term});
        this.props.onSearchTermChange(term);
    }
    render(){
        return(
            <form>
                <FormGroup>
                    <FormControl type='text' 
                        value={this.state.term} 
                        placeholder="Search" 
                        onChange={event => this.onInputChange(event.target.value)} />                
                    <Button type="submit">Submit</Button>
                </FormGroup>
            </form>
        )
    }    
}

export default SearchBar;