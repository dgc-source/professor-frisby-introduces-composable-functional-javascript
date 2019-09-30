const parseDbUrl = cfg => {
  try {
    const c = JSON.parse(cfg);
    if (c.url) {
      return c.url.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
    }
  } catch (e) {
    return null;
  }
};

const parseDbUrl = cfg =>
  tryCatch(() => JSON.parse(cfg))
    .chain(c => fromNullable(c.url))
    .fold(
      e => null,
      u => u.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
    );
