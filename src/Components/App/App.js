import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }
  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    if(this.state.playlistTracks.length > 0){
      Spotify.savePlayList(this.state.playlistName, trackURIs).then(() => {
        this.setState({
          playlistTracks: [],
          playlistName: 'Enter Playlist Name',
        });
      });
    }
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render() {
    return(
      <div>
      <h1><span className="highlight">Playlist Creator</span></h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults = {this.state.searchResults} onAdd= {this.addTrack}/>
          <Playlist playlistName = {this.state.playlistName} 
            playlistTracks= {this.state.playlistTracks}
            onRemove = {this.removeTrack}
            onNameChange = {this.updatePlaylistName}
            onSave = {this.savePlaylist}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;