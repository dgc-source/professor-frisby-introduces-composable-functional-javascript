// Module for data.task doesn't work

"https://api.spotify.com/v1/serach?q=${query}&type=artist"; // artists: {items: []}}

"https://api.spotify.com/artists/${id}/related-artists"; // artists: []

const request = require("request");
const Task = require("data.task");

const httpGet = url =>
  new Task((rej, res) =>
    request(url, (error, response, body) => (error ? rej(error) : res(body)))
  );

const getJSON = url =>
  httpGet(url)
    .map(parse)
    .chain(eitherToTask);

const first = xs => Either.fromNullable(xs[0]);

const eitherToTask = e => e.fold(Task.rejected, Task.of);

// Task Either Arritst
const findArtist = name =>
  getJSON(`https://api.spotify.com/v1/search?q=${name}&type=artist`)
    .map(result => result.artists.items)
    .map(first)
    .chain(eitherToTask);

const relatedArtist = name =>
  getJSON(`https://api.spotify.com/v1/search?q=${name}&type=artist`).map(
    result => result.artists
  );

module.exports = { findArtist, relatedArtists };
