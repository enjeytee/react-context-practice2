import React from "react"
import Header from "./Header"
import UserContext from "./userContext"

function App() {
    return (
        <div>
            <Header />
            <main>
            <UserContext.Consumer>
                {value => (
                    <p className="main">No new notifications, {value}! 🎉</p>
                )}
            </UserContext.Consumer>
            </main>
        </div>
    )
}
export default App