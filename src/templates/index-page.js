import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import TallyForm from "../components/TallyForm";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  hero,
  mainPitch,
  heading,
  description,
  blurbs,
}) => {
  const heroLogo = getImage(hero.logo) || hero.logo;
  const heroBackgroundImage =
    getImage(hero.backgroundImage) || hero.backgroundImage;

  return (
    <div>
      <FullWidthImage
        logo={heroLogo}
        backgroundImage={heroBackgroundImage}
        title={hero.title}
        subheading={hero.subheading}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    {mainPitch.title && (
                      <div className="tile">
                        <h1 className="title">{mainPitch.title}</h1>
                      </div>
                    )}
                    <div className="tile">
                      <h3 className="subtitle">{mainPitch.description}</h3>
                    </div>
                  </div>
                  {(heading || description) && (
                    <div className="columns">
                      <div className="column is-12">
                        {heading && (
                          <h1 className="has-text-weight-semibold is-size-2">
                            {heading}
                          </h1>
                        )}
                        {description && <p>{description}</p>}
                      </div>
                    </div>
                  )}
                  <Features gridItems={blurbs} />
                  {/* <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div> */}
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Latest Posts
                      </h3>
                      <BlogRoll />
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3
                        id="join"
                        className="has-text-weight-semibold is-size-2"
                      >
                        Stay in the Loop
                      </h3>
                      <TallyForm url="https://tally.so/embed/w5bZKP?alignLeft=1&hideTitle=1&dynamicHeight=1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainPitch: PropTypes.object,
  description: PropTypes.string,
  blurbs: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        mainPitch={frontmatter.mainPitch}
        heading={frontmatter.heading}
        description={frontmatter.description}
        blurbs={frontmatter.blurbs}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          title
          subheading
          backgroundImage {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          logo {
            publicURL
            childImageSharp {
              # NOTE: null in case of SVG
              gatsbyImageData(width: 240)
            }
          }
        }
        mainPitch {
          title
          description
        }
        heading
        description
        blurbs {
          title
          text
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          size
        }
      }
    }
  }
`;
