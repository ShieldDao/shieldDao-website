const PageContent = ({ children }) => {
  return (
    <div className="page-content">
      <div className="container">{children}</div>
      <style jsx>
        {`
          .page-content {
            padding-top: 120px;
            margin-bottom: 100px;
          }
        `}
      </style>
    </div>
  );
};

export default PageContent;
