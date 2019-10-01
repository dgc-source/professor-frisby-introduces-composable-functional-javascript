const Sum = x =>
({
  x,
  concat: ({x: y}) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`,
  toString: () =>
    `Sum(${x})`
})

Sum.empty = () => Sum(0)

//const res = Sum(1).concat(Sum(2))

const All = x =>
({
  x,
  concat: ({x: y}) =>
    All(x && y),
  inspect: () =>
    `All(${x})`,
  toString: () =>
    `All(${x})`
})

All.empty = () => All(true)

//const res = All(false).concat(All(true))

const First = x =>
({
  x,
  concat: _ =>
    First(x),
  inspect: () =>
    `First(${x})`,
  toString: () =>
    `First(${x})`
})

// const res = First("blah").concat(First("ice cream")).concat(First('meta programming'))


const sum = xs =>
  xs.reduce((acc, x) => acc + x, 0)

const all = xs =>
  xs.reduce((acc, x) => acc && x, true)

const first = xs =>
  xs.reduce((acc, x) => acc)

console.log(first([1,2,3]))

