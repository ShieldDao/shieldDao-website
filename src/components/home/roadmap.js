const HomeRoadMap = () => {
  return (
    <section className="roadmap">
      <div className="container">
        <div className="row mb-4">
          <h2 class="text-center col-12 text-slate-dark heading-bigger mb-4">
            Shield DAO Roadmap
          </h2>

          <ul className="roadmap-list">
            <li>
              <h3 className="title">2021 Q1</h3>

              <ul>
                <li>Economic &amp; Security Audit</li>
                <li>Exchange Launchpool</li>
                <li>Shield Farms</li>
                <li>Exchange listing</li>
              </ul>
            </li>

            <li>
              <h3 className="title">2021 Q2</h3>

              <ul>
                <li>Shield LP &amp; Farms</li>
                <li>Exchange Access Integration</li>
                <li>Shield Vault &amp; Yield Engine</li>
                <li>Fiat Gateway integration</li>
              </ul>
            </li>

            <li>
              <h3 className="title">2021 Q3</h3>

              <ul>
                <li>Smart Asset Management, Delegation &amp; Curation</li>
                <li>Pooling Mechanism</li>
                <li>Shield Vault &amp; Treasury</li>
                <li>Ethereum DeFi protocols integrations</li>
                <li>Analytics Engine Indexers with Graph</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeRoadMap;
