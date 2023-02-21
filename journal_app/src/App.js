import React, {useState} from 'react'
import {BrowserRouter as Routes, Route, Router, Link} from "react-router-dom"
import Home from "./components/Home"
import CategorySelection from "./components/CategorySelection"
import NewEntry from "./components/NewEntry"
import NotFound from "./components/NotFound"

const App = () => {
  const defaultCategories = ["Food", "Coding",  "other"]
  const [categories, setCategories] = useState(defaultCategories) 
  const [entries,setEntries] = useState([])

  function addEntryToJournal(newEntry){
    const updatedEntries = [...entries, newEntry]
    setEntries(updatedEntries)
  }
  return (
    <div >
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category Selection</Link></li>
            <li><Link to="/entry/new/:id">NewEntry</Link></li>
          </ul>

          <Routes>
            <Route exact path="/" render={(props) =><Home {...props} entries={entries}/>}/>
            <Route path="/category" render={(props) => <CategorySelection {...props} categories={categories}/> }/>
            <Route path="/entry/new/:id" render={(props) => <NewEntry {...props} categories={categories} addEntryToJournal={addEntryToJournal}/> }/>
            <Route component={NotFound} />
          </Routes>
        </Router>

    </div>
  )
}

export default App