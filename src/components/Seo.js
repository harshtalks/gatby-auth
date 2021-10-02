import React from 'react'
import { graphql, useStaticQuery } from 'gatsby' 
import { Helmet } from 'react-helmet'

const Seo = ({title, description}) => {

    const data = useStaticQuery(graphql`
    
        query MyQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
}

    `)

    const siteData = data.site.siteMetadata;


    const seo = {
        title: title || siteData.title,
        description: description || siteData.description
    }
 
    return (
        <Helmet
        title = {seo.title} 
        >
        <meta name = "title" content = {seo.title} />
        <meta name = "description" content = {seo.description}/>
        </Helmet>
    )
}

export default Seo
