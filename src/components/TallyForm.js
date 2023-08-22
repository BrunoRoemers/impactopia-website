import React from "react";
import { Helmet } from "react-helmet";

const TallyForm = ({ url }) => {
  return (
    <>
      <Helmet>
        <script
          src="https://tally.so/widgets/embed.js"
          type="text/javascript"
        />
      </Helmet>
      <iframe
        data-tally-src={url}
        loading="lazy"
        width="100%"
        height="277"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Join Impactopia"
      ></iframe>
    </>
  );
};

export default TallyForm;
