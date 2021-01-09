const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="container contact-wrapper text-slate">
          <div className="row text-center mb-4 pt-5">
            <h4 className="col-12 text-slate-dark heading-bigger mb-4">
              Get The Latest Updates
            </h4>
          </div>

          <div className="row text-center mt-lg-4 pb-5">
            <p className="col-12 mb-sm-4 mb-md-4">
              Become part of our ever growing community.
              <a
                href="https://t.me/ShieldDAO"
                target="_blank"
                title="Join our telegram group"
              >
                Join us on Telegram.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
