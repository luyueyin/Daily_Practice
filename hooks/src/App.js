import React, { useState, useEffect } from 'react';
import NewProjectForm from './newProjectForm';
import {Heading} from './Styled'
import ProjectList from './ProjectList'
import './App.css';

const App = () => {
  const initialProjects = []    

  function addProject(project) {
    setProjects([project, ...projects]) // it creates a copy of the original array
  }

  const [projects, setProjects] = useState(initialProjects)
  useEffect(() => {
    fetch('projects.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((projects) => setProjects(projects))  
  },[])  // without [] => the effect is going to start firing every time when the component renders are updated

return (
  <div className='container'>
    <Heading>Recent Projects</Heading>
    <NewProjectForm addProject={addProject} />
    <ProjectList projects={projects} />
  </div>
)
}

export default App;
