import React from 'react'
import Seo from './Seo'
import '../styles/global.css'
import Header from './Header'
const Layout = ({children,title,description}) => {
    return (
        <>
            <Seo title = {title} description = {description}/>
            <Header />
            {children}
        </>
    )
}

export default Layout
