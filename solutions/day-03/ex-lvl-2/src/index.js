import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import html5Logo from './html.png'
import css3Logo from './css.png' 
import jsLogo from './js.png'
import reactLogo from './logo512.png'


const jsx = <h1>Hello React</h1>;
const rootElement = document.getElementById('root');


const tech = (
    <div>
        <h1>Frontend Technologies</h1>
    <div className="logos">
        <img src={html5Logo}  height={100} alt="html5" />
        <img src={css3Logo}  height={100} alt="CSS" />
        <img src={jsLogo} height={80} alt="JS" />
        <img src={reactLogo} height={100} alt="React" />
    </div>
    </div>
)

const form = (
    <div>
        <form>
            <label for="firstName">First Name</label>
            <input type='text'></input>

            <label for="lastName">Last Name</label>
            <input type='text'></input>

            <label for="email">Email adress</label>
            <input type='text'></input>

            <input type='submit' value='submit'></input>
        </form>
    </div>
)

const app = (
    <div>
        {tech}
        {form}
    </div>
)



ReactDOM.render(app, rootElement);