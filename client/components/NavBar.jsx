import React from 'react';

function NavBar() {
  onclick = () => {};
  return (
    <div id="navbar-wrapper">
      <span id="games-icon-button">FunGames</span>
      <button href="/#/signin" type="button" className="navbar-buttons">
        Sign In
      </button>
    </div>
  );
}

export default NavBar;
