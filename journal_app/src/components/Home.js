import React from "react"
import {Link} from "react-router-dom"

const Home = ({entries}) => {
    return(
        <div>
            <h1> Home </h1>
            <Link to="/category">Choose a category </Link>
            {entries.map((entry,index) =>{
                return (
                    <div key={index}>
                        <h1>{entry.category}</h1>
                        <p>{entry.entry}</p>
                    </div>
                ) 
            })}
        </div>

    )
}

export default Home  