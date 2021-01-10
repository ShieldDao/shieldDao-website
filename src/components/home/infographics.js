const HomeInfoGraphics = () => {
  return (
    <section style={{ marginBottom: '80px' }} className="roadmap" id="roadmap">
      <div className="container">
        <div className="mb-4">
          <h2 className="text-center text-slate-dark heading-bigger mb-4">
            ShieldDAO Infographic
          </h2>

          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h2 className="text-center col-12 text-slate-dark mb-4">
                Roadmap
              </h2>

              <p className="text-center">
                <img alt="roadmap" className="present" src="/svg/rmap-bl.svg" />
              </p>
            </div>

            <div className="col-12 col-md-6">
              <h2 className="text-center col-12 text-slate-dark mb-4">
                Tokenomics
              </h2>

              <p className="text-center">
                <img
                  className="present"
                  alt="tokenomics"
                  src="/svg/shdtoken-bl.svg"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInfoGraphics;
