// Module for data.task doesn't work

"https://api.spotify.com/v1/serach?q=${query}&type=artist"; // artists: {items: []}}

"https://api.spotify.com/artists/${id}/related-artists"; // artists: []

const Task = require("data.task");

const argv = new Task((rej, res) => res(process.argv));
const names = argv.map(args => args.slice(2));

const related = name =>
  findArtist(name)
    .map(artist => artist.id)
    .chain(relatedArtists);

const main = ([name1, name2]) =>
  Task.of(rels1 => rels2 => [rels1, rels2]).ap(
    related(name1).ap(related(name2)),

    names.map(main).fork(console.error, console.log)
  );
