import React, { useEffect } from "react";

const TallyForm = ({ url }) => {
  const scriptSrc = "https://tally.so/widgets/embed.js";

  useEffect(() => {
    const onScriptLoad = (event) => {
      window.Tally.loadEmbeds();
    };
    const scriptNode = document.createElement("script");
    scriptNode.src = scriptSrc;
    scriptNode.async = true;
    scriptNode.addEventListener("load", onScriptLoad);
    document.body.appendChild(scriptNode);

    return () => {
      scriptNode.removeEventListener("load", onScriptLoad);
      scriptNode.remove();
    };
  }, []);

  return (
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
  );
};

export default TallyForm;
