const getPrefs = user => {
  if (user.premium) {
    return loadPrefs(user.preferences);
  } else {
    return defaultPrefs;
  }
};

const getPrefs = user =>
  (user.premium ? Right(user) : Left("not premium"))
    .map(u => u.preferences)
    .fold(() => defaultPrefs, prefs => loadPrefs(prefs));
