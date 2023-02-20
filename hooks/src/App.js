import React, { useState } from 'react';
import NewProjectForm from './newProjectForm';
import './App.css';

const App = () => {
  const initialProjects = [
    {
      name: "Sets",
      description: "A React component of popular logic game"
    },
    {
      name: "Chore Tracker",
      description: "A full stack app to track chores game"
    },
    {
      name: "Fotozu",
      description: "A full stack app using AWS logic game"
    },
  ]

    const [projects, setProjects] = useState(initialProjects)

return (
  <div>
    <h1>Recent Projects</h1>
    <NewProjectForm />
  </div>
)
}

export default App;
