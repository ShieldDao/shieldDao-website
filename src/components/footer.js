const Footer = () => {
  return (
    <section className="footerSection">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAyLjkgMzM3Ij48cGF0aCBkPSJNMTYwMi45IDkzYy01Mi0xMy4yLTEwMC45LTMzLjgtMTQ4LjItNTguNy0yMS0xMS4xLTQyLjEtMjItNjUuNS0yNy43LTMyLjItNy44LTY0LTYuNi05NS4zIDMuOC0xOC41IDYuMi0zNS40IDE1LjctNTEuOSAyNS45LTE1IDkuMy0zMC4xIDE4LjYtNDUuNCAyNy42LTIyLjMgMTMuMi00Ni43IDE5LjctNzIuNCAyMi0yMS43IDItNDMuMyAyLjgtNjUgMS0yMC40LTEuNy00MC42LTQuNC02MC45LTctMzkuMi01LjItNzguNC0xMS0xMTguMS0xMi0yNC43LS42LTQ5LjMgMS03My4yIDcuOC0yOS4xIDguMi01MC43IDI2LjQtNjguMiA1MC4zLTEyLjIgMTYuNy0yMy4zIDM0LjEtMzYuMiA1MC4zLTIwLjQgMjUuNi00NS43IDQ0LjYtNzYuMSA1Ny0yOC4yIDExLjYtNTcuNiAxNi45LTg3LjkgMTguNC0zMi44IDEuNi02NS40LTEuMi05OC0zLjItMjMuMS0xLjUtNDYuMS0zLTY5LjItNC40LTI0LjgtMS42LTQ5LjYtMi4xLTc0LjQtMi42LTI3LjQtLjYtNTMuMiA1LjgtNzguNSAxNS4zLTM2LjggMTMuOC03Mi4xIDMxLjItMTA4LjYgNDUuNy0zNS4zIDE0LjEtNzEuMyAyNS43LTEwOC4yIDM0LjMtLjUuMi0xLjEuMi0xLjcuMkMwIDE5My42IDAgMTQ3LjMtLjEgNGMwLTMgLjQtNCAzLjgtNCA1MzEuOC4xIDEwNjMuNi4xIDE1OTUuNCAwIDMuMyAwIDMuOC44IDMuOCAzLjktLjEgNjIuMSAwIDI3LjEgMCA4OS4xeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
        alt="Footer background"
        className="footer-extender"
      />

      <div className="container page-map text-white">
        <div className="row">
          <div className="language-downloads col-12 col-lg-4">
            <div className="lang-wrapper mb-5">
              <p className="heading-big mb-4">Language</p>
              <div className="dropdown">
                <a
                  className="btn btn-secondary text-white dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="caret">English</span>
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                  <a className="dropdown-item" href="#">
                    Chinese
                  </a>
                  <a className="dropdown-item" href="#">
                    Indian
                  </a>
                </div>
              </div>
            </div>
            <div className="download-wrapper" />
          </div>

          <div className="about-us col-12 col-lg-2 mt-xs-5 mt-5 mt-lg-0 mr-lg-5">
            <p className="heading-big">About us</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a className="text-white" href="#">
                  Support center
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  Customer Support
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  Copyright
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  Popular Campaign
                </a>
              </li>
            </ul>
          </div>

          <div className="about-us col-12 col-lg-2 mr-lg-5">
            <p className="heading-big">About us</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a className="text-white" href="#">
                  Support center
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  Customer Support
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  Copyright
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  Popular Campaign
                </a>
              </li>
            </ul>
          </div>

          <div className="about-us col-12 col-lg-2">
            <p className="heading-big">About us</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a className="text-white" href="#">
                  Support center
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  Customer Support
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  Copyright
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white" href="#">
                  Popular Campaign
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row col-12 mt-5 text-center justify-content-center">
          <span>Copyright 2021 @ShieldDAO Community.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
