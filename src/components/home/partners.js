import styled from 'styled-components';

const LogosList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -15px;
  flex-wrap: wrap;

  .partner-logo {
    padding: 0 15px;

    img {
      width: 150px;
      height: auto;
      line-height: 1;
      vertical-align: middle;
      display: inline-block;

      &.smaller {
        width: 80px;
      }
    }
  }
`;

const HomePartners = () => {
  return (
    <section style={{ marginBottom: '80px' }} className="roadmap" id="roadmap">
      <div className="container">
        <div className="mb-4">
          <h2 className="text-center text-slate-dark heading-bigger mb-4">
            ShieldDAO Partners
          </h2>

          <div className="row align-items-center">
            <LogosList className="col-12">
              <a
                className="partner-logo"
                href="https://nuls.io"
                title="Nuls"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img src="/svg/logo-nuls.svg" alt="Nuls" />
              </a>
              <a
                className="partner-logo"
                href="https://halborn.com/"
                title="Halborn"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img src="/svg/halborn_logo.svg" alt="Halborn" />
              </a>
              <a
                className="partner-logo"
                href="https://www.bamboodefi.com/"
                title="Bamboo"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img
                  className="smaller"
                  src="/images/bamboo-head.png"
                  alt="Bamboo"
                />
              </a>
              <a
                className="partner-logo"
                href="https://nerve.network/"
                title="Nerve"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img src="/svg/logo.a3a86c47.svg" alt="Nerve" />
              </a>
            </LogosList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
