const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__nav-container" aria-label="Footer links">
        <nav className="footer__menu">
          <div className="footer__menu-block">
            <p className="footer__menu-title">About Us</p>
            <ul className="footer__menu-items">
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Careers
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Wholesale
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Farms
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Locations
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-block">
            <p className="footer__menu-title">Customer Service</p>
            <ul className="footer__menu-items">
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  FAQs
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Search
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-block">
            <p className="footer__menu-title">Tearms & Policies</p>
            <ul className="footer__menu-items">
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Tearms of Service
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Shipping Policy
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Refund Policy
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-block">
            <p className="footer__menu-title">Contact Us</p>
            <ul className="footer__menu-items">
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  (914) 733-9020
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="#">
                  hello@mastmarket.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-block footer__menu-block--newsletter">
            <p>Newsletter</p>
            <p className="footer__newsletter-text">
              <i>
                <em>The Mast Journal</em> is a customer favorite for great
                content. Enjoy compelling interviews, essays, announcements, and
                promotions.
              </i>
            </p>
            <form className="footer__form">
              <input
                className="footer__form-input"
                type="email"
                placeholder="E-mail"
              ></input>
              <button className="footer__form-button">Subscribe</button>
            </form>
          </div>
        </nav>
        <div className="footer__social-link">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            aria-label="Follow on Instagram"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              width="24"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <div className="footer__copyright">
          <p>© 2025 - Mast Market</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
