export const FAQItem = ({ question, answer }) => {
  return (
    <div className="faq-item text-left">
      <div className="faq-question">
        <h3>{question}</h3>
      </div>
      <div className="faq-body">{answer}</div>

      <style jsx>
        {`
          .faq-item {
            text-align: left !important;
          }

          .faq-item h3 {
            height: 100%;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .faq-body {
            background: #fff;
            border-radius: 20px;
            background-color: rgb(255, 255, 255);
            box-shadow: rgba(107, 83, 254, 0.1) 0px 0px 94px 6px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding: 20px;
          }

          p:last-child {
            margin-bottom: 0;
          }
        `}
      </style>
    </div>
  );
};

const HomeFAQ = () => {
  return (
    <section className="faq-wrap" style={{ marginBottom: '50px' }}>
      <div className="container">
        <div className="row text-center mb-4">
          <h2 className="col-12 text-slate-dark heading-bigger mb-4">
            Frequently Asked Questions
          </h2>
          <p class="col-12 mb-sm-4 mb-md-5">
            You might find your answer to your question
          </p>

          <div className="faq-items-wrap col-12">
            <FAQItem
              question="What is ShieldDAO?"
              answer={<p>It's a blockchain network for insurance</p>}
            />
            <FAQItem
              question="What is ShieldDAO?"
              answer={<p>It's a blockchain network for insurance</p>}
            />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .faq-items-wrap {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
          }
        `}
      </style>
    </section>
  );
};

export default HomeFAQ;
