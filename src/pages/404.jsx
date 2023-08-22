import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                404 - Page Not Found
              </h1>
              <p>Unfortunately this page doesn't exist anymore.</p>
              <Link to="/">Go back to the homepage.</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
