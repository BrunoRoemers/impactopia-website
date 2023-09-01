import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// NOTE: Netlify configures the BRANCH env var during build
//       (https://docs.netlify.com/configure-builds/environment-variables/#git-metadata)
// NOTE: When starting the build command (package.json) the branch name is loaded into GATSBY_BRANCH
//       such that it becomes available everywhere
//       (https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/#accessing-environment-variables-in-the-browser)
const branch = process.env.GATSBY_BRANCH ?? "__UNKNOWN_BRANCH__";

// 1. manipulate DOM to add wrapper
const deployStatusImgSrc = `https://api.netlify.com/api/v1/badges/b256f778-fff4-4150-8db1-03f9b3c510d2/deploy-status?branch=${branch}`;
const deployStatusImg = document.createElement('img')
deployStatusImg.src = deployStatusImgSrc
deployStatusImg.style.display = "block"

const deployStatusLink = document.createElement('a')
deployStatusLink.href = "https://app.netlify.com/sites/impactopia/deploys"
deployStatusLink.target = "_blank"
deployStatusLink.rel = "noopener noreferrer"
deployStatusLink.style.display = "block"
deployStatusLink.insertBefore(deployStatusImg, null)

const topBar = document.createElement('div')
topBar.style.zIndex = "1000"
topBar.style.position = "fixed"
topBar.style.top = "18px"
topBar.style.left = "0"
topBar.style.right = "0"
topBar.style.margin = "0 auto"
topBar.style.width = "118px"
topBar.insertBefore(deployStatusLink, null)

const decapRoot = document.createElement('div')
decapRoot.setAttribute("id", "nc-root")

const container = document.createElement('div')
container.insertBefore(topBar, null)
container.insertBefore(decapRoot, null)

document.body.insertBefore(container, null)

// 2. Decap CMS init
const url = new URL(window.location)
CMS.init({
  // NOTE: merges with /admin/config.yml if it exists
  config: {
    branch: branch,
    site_url: url.origin,
  },
});

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

// 3. Poll Netlify Status
const pollingDelayInMs = 2000
async function updateNetlifyStatusBadge() {
  // force browser to rerender the image
  deployStatusImg.src = deployStatusImgSrc + '#' + new Date().getMilliseconds()

  // queue next update
  setTimeout(updateNetlifyStatusBadge, pollingDelayInMs);
}
setTimeout(updateNetlifyStatusBadge, pollingDelayInMs);