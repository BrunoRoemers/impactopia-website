import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import useLandingPageHero from "../../hooks/useLandingPageHero";
import FullWidthImage from "../../components/FullWidthImage";
import { getImage } from "gatsby-plugin-image";

const BlogIndexPage = () => {
  const hero = useLandingPageHero();
  const heroLogo = getImage(hero.logo) || hero.logo;
  const heroBackgroundImage =
    getImage(hero.backgroundImage) || hero.backgroundImage;

  return (
    <Layout>
      <FullWidthImage
        logo={heroLogo}
        backgroundImage={heroBackgroundImage}
        title={hero.title}
        subheading={hero.subheading}
      />
      {/* <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
            backgroundColor: "#f40",
            color: "white",
            padding: "1rem",
          }}
        >
          Latest Stories
        </h1>
      </div> */}
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="is-size-2">Latest Articles</h1>
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndexPage;