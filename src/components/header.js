import { useEffect, useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = () => {
    if (window.pageYOffset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header
      id="header"
      className={`header fixed-top ${scrolled ? 'header-scrolled' : ''}`}
    >
      <div className="container">
        <div className="logo float-left">
          <a
            className={`navbar-brand ${scrolled ? 'nav-link-dark' : ''}`}
            href="#"
          >
            <img
              id="headerImg"
              className="img-fluid navbar-brand header__logo"
              src={
                scrolled
                  ? '/images/logo-blue.png'
                  : '/images/logo-gray-white.png'
              }
              alt=""
            />
          </a>
        </div>

        <nav className="navbar navbar-expand-lg float-right d-none d-lg-inline-flex main-nav">
          <button type="button" className="mobile-nav-toggle d-lg-none">
            <span className="" />
            <span className="" />
            <span className="" />
          </button>
          <ul className="navbar-nav">
            <li className="nav-item px-2 active">
              <a
                className={`nav-link active ${scrolled ? 'nav-link-dark' : ''}`}
                href="#"
              >
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a
                className={`nav-link ${scrolled ? 'nav-link-dark' : ''}`}
                href="#"
              >
                Feature
              </a>
            </li>
            <li className="nav-item px-2">
              <a
                className={`nav-link ${scrolled ? 'nav-link-dark' : ''}`}
                href="#"
              >
                Offers
              </a>
            </li>
            <li className="nav-item px-2">
              <a
                href="#"
                className={`nav-link ${scrolled ? 'nav-link-dark' : ''}`}
              >
                Payment proofs
              </a>
            </li>
            <li className="nav-item px-2">
              <a
                className={`nav-link ${scrolled ? 'nav-link-dark' : ''}`}
                href="#"
              >
                Contact us
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn pink-btn text-white ml-md-4 px-3 font-weight-bold rounded-pill"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
