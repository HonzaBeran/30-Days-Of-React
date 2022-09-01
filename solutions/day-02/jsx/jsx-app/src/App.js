import logo from './logo.svg';
import './App.css';




function App() {
    const heading = (
      <h1 className='title'>I am a JSX element</h1>
    )

    const header = (
      <header>
        {heading}
      </header>
    )


    const yearBorn = 1997
    const currentYear = new Date().getFullYear()
    const age = currentYear - yearBorn
    const personAge = <p> {age}</p>

    const main = (
      <main>
      <ul>
        <li>Banana</li>
        <li>Apple</li>
        <li>Pineapple</li>
      </ul>
      {personAge}
      </main>
    )

    const tech = ["HTML", "CSS", "JavaScript", "React"]
    const formatedTech = tech.map((tech) => <p>{tech}</p>)
    const footer = (
      <footer>
        <p>Copyright</p>
        <p>{formatedTech}</p>
      </footer>
    ) 

    const all = (
      <div>
        {header}
        {main}
        {footer}
      </div>
    )

  return all 
}

export default App;
