import React from "react"
import UserContext from "./userContext"

function Header() {
    return (
        <UserContext.Consumer>
            {value => (
                <header>
                    <p>Welcome, {value}!</p>
                </header>
            )}
        </UserContext.Consumer>
    )    
}
export default Header
