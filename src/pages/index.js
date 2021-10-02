import * as React from "react"
import Layout from "../components/Layout"
import { useStaticQuery,graphql } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import { Link } from "gatsby"
// markup
const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    query MySiteTitle {
  site {
    siteMetadata {
      title
    }
  }
}

  `)
  const title = data.site.siteMetadata.title
  
  return (
   <Layout title = {title} description = "home {askin for login} Page">
     <h1>HELLO {isLoggedIn() ? getUser().name : "world"}! </h1>
     <p>
       {
         isLoggedIn() ? 
           (<> you are logged in so check you profile {" "} 
           <Link to = "/app/profile">Profile</Link>
           </>)
         : 
          ( <>
           log in to see your profile : 
           <Link to = "/app/login">Log in</Link>
           </>)
         
       }
     </p>
   </Layout>
  )
}

export default IndexPage
