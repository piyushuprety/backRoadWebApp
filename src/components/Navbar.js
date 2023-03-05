import imgnav from '../images/logo.svg'
import {Navdata} from '../data.js'
import { Socialdata } from '../data.js';
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={imgnav} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {Navdata.map((data) => {
            return (
              <li key={data.id}>
                <a href={data.href} rel="noreferrer" className="nav-link">
                  {data.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {Socialdata.map((data) => {
            return (
              <li key={data.id}>
                <a
                  href={data.href}
                  rel="noreferrer"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className={data.text}></i>
                </a>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
}