const wrapExamples = example => {
  if (example.previewPath) {
    try {
      example.preview = fs.readFileSync(example.previewPath);
    } catch (e) {}
  }
  return example;
};

const readFile = x => tryCatch(() => fs.readFileSync(x));

const wrapExample = example =>
  fromNullable(example.previewPath)
    .chain(readFile)
    .fold(() => example, ex => Object.assign({ preview: p }, ex));
