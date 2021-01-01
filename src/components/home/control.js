import { useEffect, useState } from 'react';

const splitSeconds = (seconds) => {
  let fm = [
    Math.floor(seconds / 60 / 60 / 24), // DAYS
    Math.floor(seconds / 60 / 60) % 24, // HOURS
    Math.floor(seconds / 60) % 60, // MINUTES
    seconds % 60, // SECONDS
  ];

  fm = fm.map((n) => (n < 10 ? '0' : '') + n);

  return fm;
};

const HomeControl = () => {
  const [seconds, setSeconds] = useState(0);
  const [splitedSeconds, setSplitedSeconds] = useState([]);

  useEffect(() => {
    // Retrieve destination date from server
    setSeconds(50000);
  }, []);

  useEffect(() => {
    let countDownSeconds = seconds;

    const countdown = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      setSplitedSeconds(splitSeconds(--countDownSeconds));
    }, 1000);

    if (countDownSeconds <= 0) clearInterval(countdown);

    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <section id="control" className="control mt-5">
      <div className="container text-slate">
        <div className="row">
          <div className="control__image-container col-sm-12 col-lg-6">
            <img
              className="control__image"
              src="images/control-99cf066f175d30e648fc6f2d6bae1b11.svg"
              alt="Control section"
            />
          </div>
          <div className="control__description col-sm-12 col-lg-5 mt-5 mt-lg-0 ml-lg-5">
            <p className="heading-big">Effortless crypto for everyone.</p>
            <div className="feature__intro">
              <h3 className="text-slate-dark heading-bigger mb-4">
                Take control of your credit and identity.
              </h3>
            </div>
            <p className="mb-sm-4 mb-md-5">
              Crumbs makes crypto investing effortless and automated, so now you
              would not miss the right time to buy. From the customer wallet to
              the marchent wallet in a few minute.
            </p>
            <h4 className="text-slate-dark fw-500">
              Sale currently on hold.
              <a href="#" className="control__read-more">
                Read More.
              </a>
            </h4>

            <div id="countdown" className="row text-center mb-4">
              <div className="col-3">
                <div className="time text-slate-dark">
                  {splitedSeconds.length && splitedSeconds[0]}
                </div>
                <span className="text text-slate">Days</span>
              </div>
              <div className="col-3">
                <div className="time text-slate-dark">
                  {splitedSeconds.length && splitedSeconds[1]}
                </div>
                <span className="text text-slate">Hours</span>
              </div>
              <div className="col-3">
                <div className="time text-slate-dark">
                  {splitedSeconds.length && splitedSeconds[2]}
                </div>
                <span className="text text-slate">Minutes</span>
              </div>
              <div className="col-3">
                <div className="time text-slate-dark">
                  {splitedSeconds.length && splitedSeconds[3]}
                </div>
                <span className="text text-slate">Seconds</span>
              </div>
            </div>
            <button
              type="button"
              className="btn text-white btn-larger pink-btn font-weight-bold rounded-pill"
            >
              <span className="btn-center-text">Buy tokens</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeControl;
