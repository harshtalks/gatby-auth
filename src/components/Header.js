import React from 'react'
import { Link, navigate } from 'gatsby'

import { getUser, isLoggedIn , logout} from '../services/auth'

const Header = () => {
    let greetingMessage = ""

    if(isLoggedIn()){
        greetingMessage = `hello ${getUser().name}`
    }else{
        greetingMessage = "You aren't Logged in"
    }
    return (
        <header className="header">
            <div className="logo">
                <Link to = "/">Auth learn</Link>
            </div>
            <div className="message">
                {greetingMessage}
            </div>
            <nav>
                 <Link to = "/">Home</Link>
                  <Link to = "/">Profile</Link>
                   {
                       isLoggedIn() ? (
                           <a href = "/" onClick = {e => {e.preventDefault();
                        logout(() => navigate(`/app/login`))
                            } } >Logout</a>
                       ) : null
                   }
            </nav>
        </header>
    )
}

export default Header
