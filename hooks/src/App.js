import React, { useEffect, useReducer } from 'react';
import NewProjectForm from './newProjectForm';
import {Heading} from './Styled'
import ProjectList from './ProjectList'
import './App.css';
import reducer from './utils/reducer';

const App = () => {

  const initialState = {
    projects: []
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {projects} = store // pulling that property 'projects' out of the state object

  // const initialProjects = []    

  // const [projects, setProjects] = useState(initialProjects)
  useEffect(() => {
    fetch('projects.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    // .then((projects) => setProjects(projects)) 
    .then((project) => {
      dispatch({
        type: 'addProject',  //`setProjects`
        data: project  // `projects`
      })  
    })
    .catch((error) => console.log(error))  
  },[])  // without [] => the effect is going to start firing every time when the component renders are updated
    

  function addProject(project) {
    // setProjects([project, ...projects]) // it creates a copy of the original array
    dispatch({
      type: 'setProjects',
      data: [project, ...projects]
    })
  }

return (
  <div className='container'>
    <Heading>Recent Projects</Heading>
    <NewProjectForm addProject={addProject} />
    <ProjectList projects={projects} />
  </div>
)
}

export default App;
