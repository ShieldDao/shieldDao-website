import { useState } from 'react';

const StickySurvey = () => {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <div className="topBarPinned">
      Want to participate in ShieldDAO Airdrop?
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfUQvJ4Un0dp1nFO1Aey4KpwU_POrrYjXfPXtg1NckRNS03hg/formResponse"
        target="_blank"
      >
        <strong>Feel out this form</strong>
      </a>
      <button
        aria-label="Close"
        type="button"
        onClick={() => setVisible(false)}
        className="dwclose"
      >
        &times; Close
      </button>
    </div>
  ) : (
    <></>
  );
};

export default StickySurvey;
