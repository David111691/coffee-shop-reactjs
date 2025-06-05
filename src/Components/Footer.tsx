const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__nav-container" aria-label="Footer links">
        <nav className="footer__menu">
          <div className="footer__menu-list">
            <p>About Us</p>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Wholesale</a>
              </li>
              <li>
                <a href="#">Farms</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <p>Customer Service</p>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <p>Tearms & Policies</p>
            <ul>
              <li>
                <a href="#">Tearms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list">
            <p>Contact Us</p>
            <ul>
              <li>
                <a href="#">(914) 733-9020</a>
              </li>
              <li>
                <a href="#">hello@mastmarket.com</a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-list footer__menu-list--newsletter">
            <p>Newsletter</p>
            <p>
              The Mast Journal is a customer favorite for great content. Enjoy
              compelling interviews, essays, announcements, and promotions.
            </p>
            <form>
              <input></input>
              <button>Subscibe</button>
            </form>
          </div>
        </nav>
        <div className=""></div>
        <div className=""></div>
      </div>
    </footer>
  );
};

export default Footer;
