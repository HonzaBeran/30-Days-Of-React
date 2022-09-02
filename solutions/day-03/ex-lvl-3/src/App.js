import house from './house.jpg';
import './App.css';


function Skill(props) {
  return (
    <div className="skill">
     {props.technology}
    </div>
  )
}

function App() {
  const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'];
  
  return (
    <div className="card">
      <div className='person'>
        <img src={house} alt='Dr. House'></img>
        <div className='name'>Dr. House <i class="fa-solid fa-circle-check"></i></div>
        <div className='job'>Best Doctor Ever!</div>
      </div>
      <h2>Skills</h2>
      <div className='skills'>
        {skills.map((skill) => <Skill technology={skill} />)}
      </div>
      <div className='date'><i class="fa-regular fa-clock"></i> Joined on Aug, 2022</div>
    </div>
  );
}

export default App;
