# Playlist-Creator

This is a React web app that utilizes Spotify API to search for songs in the Spotify library, curate a custom playlist, and save the playlist to user’s Spotify account: https://curate.surge.sh/

It contains the following features:
* Spotify Authentication — user logs into Spotify and follows the authentication setup.
* Searchbar — user types a song name, artist, album, or podcast into the search bar. When user clicks on the “Search” button, the web app takes the query from user input and generates search results onto the “Search Results” list container.
* Add Song — from the search results list, user can add a track by clicking on the “+” button which will populate the “Playlist” container.
* Within the Playlist Track container, user can do the following:
    * Rename title — as such, user inputs the name of their playlist. Otherwise, the default name is “My Playlist”
    * Remove song — by clicking on the “ - “ button, user can remove a track from the Playlist container.
    * Save Playlist  — user can save the curated playlist by clicking the “Save to Spotify” button. The playlist will be generated and saved onto user’s Spotify account, and the object array that contains the Playlist Track container will empty.
