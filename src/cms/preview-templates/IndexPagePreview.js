import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        hero={{
          title: entry.getIn(["data", "hero", "title"]),
          subheading: entry.getIn(["data", "hero", "subheading"]),
          logo: getAsset(entry.getIn(["data", "hero", "logo"])),
          backgroundImage: getAsset(
            entry.getIn(["data", "hero", "backgroundImage"])
          ),
        }}
        mainPitch={data.mainPitch || {}}
        heading={data.heading}
        description={data.description}
        blurbs={data.blurbs}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
