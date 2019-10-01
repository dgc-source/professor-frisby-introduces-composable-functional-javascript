// module for Immutable doesn't work

const { List } = Immutable;

const merch = () =>
  List.of(x => y => z => `${x}-${y}-${z}`)
    .ap(List(["teeshirt", "sweater"]))
    .ap(List(["large", "medium", "small"]))
    .ap(List(["black", "white"]));

const res = merch();
console.log(res);
