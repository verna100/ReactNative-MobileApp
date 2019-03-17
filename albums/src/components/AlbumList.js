/* eslint-disable max-len */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// this scrollview makes the albumlist scrollable. before adding this on it was just view and the scrolling wasn't allowed
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    // this initializes the state. it does not modify it
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
            // the purpose of setState is to update our component state and say here's new data we now need to re render our component with the new data. This is the only way in which we update our components state
    }
    // helper method to pull each album out to make a separate card of each. here you pick one album from the albums array and this function will match over each and create a new array
    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />
        );
    }


    render() {
        console.log(this.state);
    return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
        );
    }
}

export default AlbumList;
