//index.js
// importing the react and react-dom package
import React from 'react'
import ReactDOM from 'react-dom'

const headerStyles = {
    backgroundColor: '#61DBFB', 
    fontFamily: 'Helvetica',
    padding: 25, 
    lineHeight: 1.5,
    margin: 0,
}

const header = (
    <header style={headerStyles}>
        <h1>Welcome to 30 Days of React</h1>
    </header>
)

const main = (
    <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quam obcaecati mollitia quaerat excepturi perspiciatis dolor blanditiis facilis corrupti magni temporibus nisi laudantium error vero qui esse iusto rem nostrum!</p>
    </main>
)

const footer = (
    <footer>
        <p>Copyright</p>
    </footer>
)

const app = (
    <div>
        {header}
        {main}
        {footer}
    </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement)
