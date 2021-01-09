const { default: Link } = require('next/link');

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
          <div className="language-downloads col-12">
            <div className="download-wrapper" />

            <div className="social-icons">
              <a href="https://github.com/ShieldDAO/" rel="me" target="_blank">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
                </svg>
              </a>

              <a href="https://twitter.com/ShieldDAO" rel="me" target="_blank">
                <svg className="icon" viewBox="0 0 512 512">
                  <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0" />
                </svg>
              </a>

              <a href="https://t.me/ShieldDAO" rel="me" target="_blank">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" />
                </svg>
              </a>

              <a href="https://medium.com/@ShieldDAO" rel="me" target="_blank">
                <svg className="icon" viewBox="0 0 256 256">
                  <rect x="0" y="0" width="256" height="256" />
                  <path
                    d="M61.0908952,85.6165814 C61.3045665,83.5054371 60.4994954,81.4188058 58.9230865,79.9979257 L42.8652446,60.6536969 L42.8652446,57.7641026 L92.7248438,57.7641026 L131.263664,142.284737 L165.145712,57.7641026 L212.676923,57.7641026 L212.676923,60.6536969 L198.947468,73.8174045 C197.763839,74.719636 197.176698,76.2025173 197.421974,77.670197 L197.421974,174.391342 C197.176698,175.859021 197.763839,177.341902 198.947468,178.244134 L212.355766,191.407842 L212.355766,194.297436 L144.91283,194.297436 L144.91283,191.407842 L158.802864,177.923068 C160.16778,176.558537 160.16778,176.157205 160.16778,174.070276 L160.16778,95.8906948 L121.54867,193.97637 L116.329871,193.97637 L71.3679139,95.8906948 L71.3679139,161.628966 C70.9930375,164.392788 71.9109513,167.175352 73.8568795,169.174019 L91.9219516,191.086776 L91.9219516,193.97637 L40.6974359,193.97637 L40.6974359,191.086776 L58.7625081,169.174019 C60.6942682,167.172038 61.5586577,164.371016 61.0908952,161.628966 L61.0908952,85.6165814 Z"
                    fill="#6945f6"
                  />
                </svg>
              </a>

              <a href="https://discord.gg/A5baJdCj" rel="me" target="_blank">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="m3.58 21.196h14.259l-.681-2.205 1.629 1.398 1.493 1.338 2.72 2.273v-21.525c-.068-1.338-1.22-2.475-2.648-2.475l-16.767.003c-1.427 0-2.585 1.139-2.585 2.477v16.24c0 1.411 1.156 2.476 2.58 2.476zm10.548-15.513-.033.012.012-.012zm-7.631 1.269c1.833-1.334 3.532-1.27 3.532-1.27l.137.135c-2.243.535-3.26 1.537-3.26 1.537s.272-.133.747-.336c3.021-1.188 6.32-1.102 9.374.402 0 0-1.019-.937-3.124-1.537l.186-.183c.291.001 1.831.055 3.479 1.26 0 0 1.844 3.15 1.844 7.02-.061-.074-1.144 1.666-3.931 1.726 0 0-.472-.534-.808-1 1.63-.468 2.24-1.404 2.24-1.404-.535.337-1.023.537-1.419.737-.609.268-1.219.4-1.828.535-2.884.468-4.503-.315-6.033-.936l-.523-.266s.609.936 2.174 1.404c-.411.469-.818 1.002-.818 1.002-2.786-.066-3.802-1.806-3.802-1.806 0-3.876 1.833-7.02 1.833-7.02z" />
                  <path d="m14.308 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.576-1.335-1.29-1.335v.003c-.708 0-1.288.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
                  <path d="m9.69 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.575-1.335-1.286-1.335l-.004.003c-.711 0-1.29.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="row col-12 mt-5 text-center justify-content-center">
          <p>
            Copyright 2021
            <Link href="/">
              <a>@ShieldDAO</a>
            </Link>
            Community.
          </p>
          <Link href="/legal-disclaimer">
            <a className="legal">Legal Disclaimer</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          .social-icons {
            display: grid;
            grid-auto-flow: column;
            justify-content: center;
            grid-gap: 0 15px;
          }

          .social-icons svg {
            width: 2.2em;
            height: 2.2em;
            fill: #fff;
          }

          p a {
            color: #fff;
            display: inline-block;
            margin: 0 2px;
          }

          a.legal {
            text-decoration: underline;
            color: #fff;
            font-weight: 500;
            display: inline-block;
            margin-left: 3px;
            transition: all 200ms ease-in-out;
          }

          a.legal:hover {
            color: #180b75;
            text-decoration: none;
          }
        `}
      </style>
    </section>
  );
};

export default Footer;
