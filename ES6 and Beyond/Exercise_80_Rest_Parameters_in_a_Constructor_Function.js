// Exercise 80: Rest Parameters in a Constructor Function

function Playlist(...songs) {
this.songs = songs;
}
let myPlaylist = new Playlist("Song A", "Song B", "Song C");
console.log(myPlaylist.songs);
Note: To run module examples, you’ll typically need files in an environment that supports ES modules (like a modern browser with type="module" in <script>, or Node.js with appropriate settings). The code below illustrates basic usage.