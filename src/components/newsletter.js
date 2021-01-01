const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="container contact-wrapper text-slate">
          <div className="row text-center mb-4 pt-5">
            <h4 className="col-12 text-slate-dark heading-bigger mb-4">
              Get The Latest PayBear Updates
            </h4>
            <p className="col-12 mb-sm-4 mb-md-4">
              And be the first to know when our crowdsale launches!
            </p>
          </div>
          <div className="row justify-content-center">
            <form action="" className="col-12 col-lg-7">
              <div className="contact-container__email-bg">
                <input
                  type="email"
                  className="contact-container__email-input col-sm-12 col-lg-8 py-2 py-lg-4"
                  placeholder="Enter your Email address"
                />
              </div>
              <input
                type="submit"
                className="contact-container__submit col-12 col-lg-3 my-3 my-lg-0 py-lg-4"
                value="Send message"
              />
            </form>
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
