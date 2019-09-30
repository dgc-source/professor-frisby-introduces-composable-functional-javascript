const openSite = () => {
  if (current_user) {
    return renderPage(current_user);
  } else {
    return showLogin();
  }
};

const openSite = () => fromNullable(current_user).fold(showLogin, renderPage);
