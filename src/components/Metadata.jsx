import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { getImage } from "gatsby-plugin-image";
import useSiteMetadata from "../hooks/useSiteMetadata";

// example: https://www.wpeform.io/blog/add-open-graph-site-url-to-gatsbyjs/
const Metadata = ({
  title,
  socialTitle,
  description,
  socialDescription,
  image,
}) => {
  const { siteUrl } = useSiteMetadata();
  const imageData = getImage(image);
  const location = useLocation();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        property="og:title"
        content={socialTitle?.trim() ? socialTitle : title}
      />
      <meta
        property="og:description"
        content={socialDescription?.trim() ? socialDescription : description}
      />
      <meta property="og:url" content={`${siteUrl}${location.pathname}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={location.origin + imageData.images.fallback.src}
      />
      <meta property="og:image:width" content={imageData.width} />
      <meta property="og:image:height" content={imageData.height} />
    </Helmet>
  );
};

export default Metadata;
