const HomeTransactions = () => {
  return (
    <section id="transactions" className="transactions">
      <div className="container">
        <div className="row">
          <div className="feature__block text-slate col-12 col-lg-5 mt-5 mr-lg-5">
            <p className="mb-4 heading-big">
              Fully decentralized and community-driven
            </p>
            <div className="feature__intro">
              <h3 className="text-slate-dark heading-bigger mb-4">
                ShieldDAO community is considered as the main driver and asset
              </h3>
            </div>
            <p className="mb-sm-4 mb-md-5">
              ShieldDAO is aimed at improving Blockchain user experience,
              securing data using The Graph protocol and creating social utility
              products for ease of living.
              <br />
              ShieldDAO supply is pre-mined and will not be providing mint
              functions.
            </p>
            <a
              target="_blank"
              href="https://docs.shielddao.app"
              className="btn text-white btn-larger pink-btn font-weight-bold rounded-pill"
            >
              <span className="btn-center-text">Get Docs</span>
            </a>
          </div>
          <div className="feature__description col-12 col-lg-6 mt-5 mt-lg-0 ml-lg-5">
            <div className="row align-items-center">
              <div className="col-6">
                <img src="/images/loss.svg" alt="Create Payment Address" />
                <h4 className="text-slate-dark heading-big fw-500">
                  Loss Mitigation
                </h4>
                <p>
                  ShieldDao uses a combination of strategies to mitigate loss:
                  <br />
                  <small>a.</small> Risk avoidance <br />
                  <small>b.</small> Risk acceptance
                  <br />
                  <small>c.</small> Risk reduction
                  <br />
                  <small>d.</small> Subrogation by leveraging legal resources to
                  ensure ShieldDoa's solvency
                </p>
              </div>
              <div className="col-6">
                <img src="/images/staking.svg" alt="Ask for Payment" />
                <h4 className="text-slate-dark heading-big fw-500">Staking</h4>
                <p>
                  The ShieldDao community can stake digital assets to receive
                  rewards through Liquidity mining program
                </p>
              </div>
              <div className="col-6">
                <img src="/images/gov.svg" alt="Get Paid" />
                <h4 className="text-slate-dark heading-big fw-500">
                  Governance
                </h4>
                <p>
                  The vision of ShieldDao is to create an operating system for
                  trustless transactions by eliminating counterparty risk via
                  disintermediating.
                </p>
              </div>
              <div className="col-6">
                <img src="/images/dev.svg" alt="Get Payment Notification" />
                <h4 className="text-slate-dark heading-big fw-500">
                  Product Development
                </h4>
                <p>
                  ShieldDao's blockchain product development is driven by
                  community use case, proof of concept built and launched with
                  data mapping and governance implementation.
                </p>
              </div>

              <div className="col-6">
                <img src="/images/loss.svg" alt="Get Payment Notification" />
                <h4 className="text-slate-dark heading-big fw-500">
                  Data Curation
                </h4>
                <p>
                  ShieldDao's data curation, using The Graph Protocol, helps
                  manage data to make it more useful for users engaging in data
                  discovery and analysis.
                </p>
              </div>

              <div className="col-6">
                <a
                  href="https://docs.shielddao.app/features"
                  target="_blank"
                  style={{
                    border: '1px solid #eee',
                    borderRadius: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '120px',
                  }}
                >
                  See full Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          small {
            display: inline-block;
            margin: 0 5px 0 0;
            color: #ff7ca0;
          }
        `}
      </style>
    </section>
  );
};

export default HomeTransactions;
