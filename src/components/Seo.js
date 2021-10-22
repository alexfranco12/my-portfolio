import React from "react";
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from "gatsby";
import favicon from '../images/favicon.ico'

export const Seo = ({ description, keywords, title, image, url, author }) => {
  return ( 
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaTitle = title || data.site.siteMetadata.title;
        const metaDescription = description || data.site.siteMetadata.description;
        const metaAuthor = author || data.site.siteMetadata.author; 
        const metaImage = image || data.site.siteMetadata.image; 
        const metaURL = url || data.site.siteMetadata.url; 
        const metaKeywords = keywords || ["gatsby blog", "gatsby MDX blog"];

        return (
          <Helmet 
            title={metaTitle}
            meta={
              [
                {
                  name: "description",
                  content: metaDescription,
                },
                {
                  property: "og:title",
                  content: metaTitle,
                },
                {
                  property: "og:author",
                  content: metaAuthor,
                },
                {
                  property: "og:description",
                  content: metaDescription,
                },
                {
                  property: "og:type",
                  content: "website",
                },
                {
                  property: "og:image",
                  content: metaImage,
                },
                {
                  property: "og:url",
                  content: metaURL,
                }
              ].concat(
                metaKeywords && metaKeywords.length > 0 ? {
                  name: "keywords",
                  content: metaKeywords.join(", ")
                } : []
              )
            } >
            <link rel="icon" href={favicon} />
          </Helmet>
        )
      }}
    />
  );
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        image
        url
        author
      }
    }
  }
`;