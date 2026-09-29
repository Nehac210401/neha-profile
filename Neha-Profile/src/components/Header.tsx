import { useState } from "react";
import { NavLink } from "react-router";
import { tracks } from "../data/tracks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav-inner">
        <NavLink to="/" className="nav-name">
          Neha Chatrath
        </NavLink>
        <nav>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            {tracks.map((track) => (
              <li key={track.id}>
                <NavLink to={track.path}>{track.navLabel}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          menu
        </button>
      </div>
    </header>
  );
}
