import { useState } from 'react';

const StickySurvey = () => {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <div className="topBarPinned">
      Want to participate in ShieldDAO Airdrop?
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScUFWmNasLAsxp4xxDQMTTDI8Sog0oj1a-6Az6EaerUlMbmWQ/viewform"
        target="_blank"
      >
        <strong>Fill out this form</strong>
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
