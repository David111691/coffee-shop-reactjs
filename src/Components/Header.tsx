function Header() {
  return (
    <div className="header__container">
      <header className="header">
        <a className="header__logo">
          <img
            className="header__img"
            src="./logo.webp"
            width="100"
            height="100"
          />
        </a>
        <ul className="header__primary-nav">
          <li className="header__link-container">
            <a className="header__link">New</a>
          </li>
          <li className="header__link-container">
            <a className="header__link">Pantry</a>
          </li>
          <li className="header__link-container">
            <a className="header__link">Coffee</a>
          </li>
          <li className="header__link-container">
            <a className="header__link">Chocolate</a>
          </li>
          <li className="header__link-container">
            <a className="header__link">Gift cards</a>
          </li>
          <li className="header__link-container">
            <a className="header__link">Journal</a>
          </li>
        </ul>
        <ul className="header__secondary-nav">
          <li>
            <a className="header__second-link" href="#">
              <svg fill="none" width="24" viewBox="0 0 24 24">
                <path
                  d="M16.125 8.75c-.184 2.478-2.063 4.5-4.125 4.5s-3.944-2.021-4.125-4.5c-.187-2.578 1.64-4.5 4.125-4.5 2.484 0 4.313 1.969 4.125 4.5Z"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3.017 20.747C3.783 16.5 7.922 14.25 12 14.25s8.217 2.25 8.984 6.497"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="header__second-link" href="#">
              <svg fill="none" width="24" viewBox="0 0 24 24">
                <path
                  d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727Z"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M15.857 15.858 21 21.001"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="header__second-link" href="#">
              <svg fill="none" width="24" viewBox="0 0 24 24">
                <path
                  d="M2 10h20l-4 11H6L2 10Zm14-3a4 4 0 0 0-8 0"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
