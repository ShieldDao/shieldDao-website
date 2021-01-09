import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ darkHeader }) => {
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
      className={`header fixed-top ${
        scrolled || darkHeader ? 'header-scrolled' : ''
      }`}
    >
      <div className="container">
        <div className="logo float-left">
          <Link href="/">
            <a
              className={`navbar-brand ${
                scrolled || darkHeader ? 'nav-link-dark' : ''
              }`}
            >
              <img
                id="headerImg"
                className="img-fluid navbar-brand header__logo"
                src={
                  scrolled || darkHeader
                    ? '/images/logo-black.png'
                    : '/images/logo-gray-white.png'
                }
                alt=""
              />
            </a>
          </Link>
        </div>

        <nav className="navbar navbar-expand-lg float-right d-none d-lg-inline-flex main-nav">
          <button type="button" className="mobile-nav-toggle d-lg-none">
            <span className="" />
            <span className="" />
            <span className="" />
          </button>
          <ul className="navbar-nav">
            <li className="nav-item px-2 active">
              <Link href="/">
                <a
                  className={`nav-link active ${
                    scrolled || darkHeader ? 'nav-link-dark' : ''
                  }`}
                >
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item px-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  document
                    .getElementById('transactions')
                    .scrollIntoView({ behavior: 'smooth' });
                }}
                className={`nav-link ${
                  scrolled || darkHeader ? 'nav-link-dark' : ''
                }`}
              >
                Features
              </a>
            </li>
            <li className="nav-item px-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  document
                    .getElementById('roadmap')
                    .scrollIntoView({ behavior: 'smooth' });
                }}
                target="_blank"
                className={`nav-link ${
                  scrolled || darkHeader ? 'nav-link-dark' : ''
                }`}
              >
                Roadmap
              </a>
            </li>
            <li className="nav-item px-2">
              <a
                target="_blank"
                href="https://docs.ShieldDAO.app"
                className={`nav-link ${
                  scrolled || darkHeader ? 'nav-link-dark' : ''
                }`}
              >
                Documentation
              </a>
            </li>
          </ul>
          <button
            type="button"
            disabled
            className="btn pink-btn text-white ml-md-4 px-3 font-weight-bold rounded-pill"
          >
            Launch App <small>(Coming soon)</small>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
