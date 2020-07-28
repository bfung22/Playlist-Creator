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

![alt text](https://user-images.githubusercontent.com/68138908/88651378-707e3f00-d07e-11ea-9b12-b0f55e71f267.png)

![alt text](https://camo.githubusercontent.com/9179d7900884993496e5739088350d18fb20ad14/68747470733a2f2f646c2e6169727461626c652e636f6d2f2e6174746163686d656e745468756d626e61696c732f65616532383632333966373330626331363936396466313061356636616239342f6630366563613432)

![alt text](https://user-images.githubusercontent.com/68138908/88651319-65c3aa00-d07e-11ea-81b8-15e4549240dd.png)
