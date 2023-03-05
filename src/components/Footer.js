import { Socialdata } from "../data";
import { Navdata } from "../data";
export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {Navdata.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.href} className="footer-link">
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {Socialdata.map((item) => {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={item.text}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}