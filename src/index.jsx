import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import UserContent from './components/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContent.Provider 
        value={'John'}
    >
        <App />
    </UserContent.Provider>
)