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
                href="https://docs.shielddao.app/features"
                target="_blank"
                className={`nav-link ${
                  scrolled || darkHeader ? 'nav-link-dark' : ''
                }`}
              >
                Features
              </a>
            </li>
            <li className="nav-item px-2">
              <Link href="/roadmap">
                <a
                  className={`nav-link ${
                    scrolled || darkHeader ? 'nav-link-dark' : ''
                  }`}
                >
                  Roadmap
                </a>
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link href="/about">
                <a
                  className={`nav-link ${
                    scrolled || darkHeader ? 'nav-link-dark' : ''
                  }`}
                >
                  About
                  <svg className="icon" viewBox="0 0 451.847 451.847">
                    <path
                      d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                    />
                  </svg>
                </a>
              </Link>

              <ul>
                <li>
                  <Link href="/about">
                    <a>About ShieldDAO</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tokenomics">
                    <a>Tokenomics</a>
                  </Link>
                </li>

                <li>
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

      <style jsx>
        {`
          .navbar > ul > li {
            position: relative;
          }

          .navbar > ul > li > a svg {
            fill: #fff;
            margin-left: 8px;
            width: 10px;
            height: 10px;
          }

          .header-scrolled .navbar > ul > li > a svg {
            fill: #000;
          }

          .navbar > ul > li > ul {
            position: absolute;
            background: #fff;
            top: 100%;
            left: 0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 10px;
            border-radius: 12px;
            list-style: none;
            min-width: 200px;
            line-height: 1;
            transition: all 320ms cubic-bezier(0.77, 0, 0.175, 1);
          }

          .navbar > ul > li:not(:hover) > ul {
            opacity: 0;
            transform: translateY(10px);
            visibility: hidden;
          }

          .navbar > ul > li > ul > li > a {
            display: block;
            text-align: center;
            width: 100%;
            position: relative;
            font-weight: 500;
            padding: 8px 0px;
            border-radius: 7px;
            margin-bottom: 6px;
            color: #333;
            text-decoration: none;
          }

          .navbar > ul > li > ul > li > a:hover {
            background: rgb(255, 148, 147, 0.4);
          }

          .navbar > ul > li > ul > li:last-child > a {
            margin-bottom: 0;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
