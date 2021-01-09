const HomeHero = () => {
  return (
    <section className="banner_section">
      <div className="container text-white">
        <div className="col-12 col-md-10 col-lg-8 col-lg-5 p-0">
          <h2 className="banner_section__h2 font-weight-bold mb-sm-4">
            ShieldDAO, Protect your investments
          </h2>

          <p className="col-10 col-md-8 p-0">
            ShieldDAO is a decentralized community of Blockchain products users,
            who votes, take decisions, delegate, index and curate Blockchain
            assets.
            <br />
            ShieldDAO community is born after{' '}
            <a
              href="https://cointelegraph.com/news/cover-protocol-suffers-infinite-minting-attack-price-tanks-97"
              target="_blank"
              rel="external nofollow"
            >
              old COVER Protocol hack
            </a>
            , with the idea to better protect community members thanks to
            specific governance &amp; delegation.
          </p>
          <div className="mt-5 mb-4">
            <button
              type="button"
              disabled
              className="btn btn-success font-weight-bolder px-5 py-3"
            >
              Launch App <small>(Coming soon)</small>
            </button>
            <a
              href="https://ShieldDAO.medium.com/introduction-to-shield-dao-3e5c557655c0"
              target="_blank"
              className="btn btn-transparent font-weight-bold text-white d-inline-flex pl-0 pl-md-2 ml-md-2"
            >
              Download Whitepaper
              <svg className="flaticon-next ml-2" viewBox="0 0 31.49 31.49">
                <path
                  d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
                       C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
                       c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="social-share mt-5">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURI(
              'https://ShieldDAO.app'
            )}`}
            target="_blank"
            rel="nofollow"
            className="btn btn-transparent font-weight-bolder text-white"
          >
            <svg
              className="mr-2"
              fill="currentColor"
              height="32"
              width="32"
              viewBox="0 0 512 512"
            >
              <path
                d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5
                    C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1c-80.5-4-151.9-42.6-199.6-101.3
                    c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.2,63.3,43.2,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95
                    c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5
                    c-7.8,0-15.5-0.5-23.1-1.4C62.8,432,113.7,448,168.3,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5
                    C462.6,146,479,129,492,109.5z"
              />
            </svg>
            Share on Twitter
          </a>
        </div>
      </div>
      <img
        src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLDkcOrw67DqV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxNjAwIDMzOC45IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUvPjxwYXRoIGQ9Ik0xNTk5LjkgMjQ1LjFjLTUxLjkgMTMuMi0xMDAuNyAzNC0xNDcuOSA1OS0yMSAxMS4xLTQyLjEgMjIuMS02NS40IDI3LjgtMzIuMSA3LjktNjMuOCA2LjYtOTUuMS0zLjgtMTguNS02LjItMzUuMy0xNS44LTUxLjgtMjYuMS0xNS05LjQtMzAuMS0xOC43LTQ1LjMtMjcuNy0yMi4zLTEzLjItNDYuNy0xOS44LTcyLjMtMjIuMS0yMS42LTItNDMuMi0yLjgtNjQuOS0xLTIwLjMgMS43LTQwLjUgNC40LTYwLjcgNy4xLTM5LjIgNS4yLTc4LjMgMTEuMS0xMTcuOCAxMi0yNC43LjYtNDkuMi0xLTczLjEtNy44LTI5LTguMi01MC42LTI2LjUtNjguMS01MC41LTEyLjItMTYuNy0yMy4zLTM0LjMtMzYuMS01MC41LTIwLjQtMjUuNy00NS42LTQ0LjgtNzUuOS01Ny4zLTI4LjItMTEuNi01Ny41LTE3LTg3LjgtMTguNS0zMi43LTEuNi02NS4yIDEuMi05Ny44IDMuMi0yMyAxLjUtNDYgMy02OS4xIDQuNC0yNC43IDEuNi00OS41IDIuMS03NC4yIDIuNi0yNy4zLjYtNTMuMS01LjgtNzguMy0xNS40LTM2LjctMTMuOS03Mi0zMS4zLTEwOC40LTQ1LjlDNzQuNiAyMC40IDM4LjcgOC43IDEuOC4xIDEuMi0uMS42IDAgLjEgMGMwIDE0NCAwIDE5MS0uMSAzMzUgMCAzIC40IDQgMy44IDQgNTMwLjgtLjEgMTA2MS42LS4xIDE1OTIuNCAwIDMuMyAwIDMuOC0uOCAzLjgtMy45LS4xLTYyLjQtLjEtMjcuNy0uMS05MHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
        alt="banner background"
      />

      <style jsx>
        {`
          p a {
            color: #c5baff;
            font-weight: 500;
          }

          p a:hover {
            color: #fff;
          }
        `}
      </style>
    </section>
  );
};

export default HomeHero;
