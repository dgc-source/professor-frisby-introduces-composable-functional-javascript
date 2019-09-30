const concatUniq = (x, ys) => {
  const found = ys.filter(y => y === x)[0];
  return found ? ys : ys.concat(x);
};

const concatUniq = (x, ys) =>
  fromNullable(ys.filter(y => y === x)[0]).fold(() => ys.concat(x), y => ys);
