import React,{useState, useEffect} from "react";
import axios from "axios";
import User from './User'
import DarkModeToggle from "react-dark-mode-toggle";

const App = () => {
    const [state, setState] = useState([])
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    // Fetching data from API and stroing in state
    useEffect(() => {
        const repo = async () => {
            const res = await axios('https://jsonplaceholder.typicode.com/users');
            setState(res.data)
        }
        
        repo();
        
    
    },[])

    const removef = (index) => {
       setState(state.filter(user => user.id !==index ))
    }   

    const update = (id, updatedata) => {  
        setState(
            state.map((userdata) => {
              if (userdata.id === id) return { ...userdata, ...updatedata };
              return userdata;
            }),
          );
        
    }
    return (
        
        <div className="container">
                <div className="cards">
                    { state.map((user,index) => {
                        return (<User 
                            key = {index}
                            username = {user.username}
                            name = {user.name}
                            email ={user.email}
                            phone={user.phone}
                            website={user.website}
                            id={user.id}
                            remove = {() => removef(user.id)}
                            update = {update}
                        />  )
                    }) }
                </div>
        </div>
        
    )
}

export default App;