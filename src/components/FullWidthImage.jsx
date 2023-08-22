import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 400,
    backgroundImage,
    logo,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {backgroundImage?.url ? (
          <img
            src={backgroundImage}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
          <GatsbyImage
            image={backgroundImage}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading || logo) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
              padding: "0.5em",
            }}
          >
            {/* Any content here will be centered in the component */}
            {logo && (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              >
                {logo.childImageSharp ? (
                  <GatsbyImage
                    image={logo}
                    alt="Impactopia"
                    style={{ width: "150px", height: "150px" }}
                  />
                ) : (
                  <img
                    src={logo.publicURL || logo.url}
                    alt="Impactopia"
                    style={{ maxWidth: "150px" }}
                  />
                )}
              </div>
            )}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  // boxShadow:
                  //   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                  // backgroundColor: "rgb(255, 68, 0)",
                  backgroundColor: "white",
                  // color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                  marginTop: "0.5rem",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  // boxShadow:
                  //   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                  // backgroundColor: "rgb(255, 68, 0)",
                  background: "white",
                  // color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                  textAlign: "center",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
