import { graphql, useStaticQuery } from 'gatsby'

const useFooterSettings = () => {
  const { headerSettings: footerSettings } = useStaticQuery(
    graphql`
      query FOOTER_SETTINGS_QUERY {
        footerSettings {
          temp
        }
      }
    `
  )
  return footerSettings
}

export default useFooterSettings
