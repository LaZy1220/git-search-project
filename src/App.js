import { Header } from "./components/Header/Header";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { StartPage } from "./components/StartPage/StartPage";
import { useState } from "react";
import { UserInfo } from "./components/UserInfo/UserInfo";
import {Routes,Route } from 'react-router-dom'
import axios from "axios";

function App() {
  const[user,setUser]=useState(null)
  const[repos,setRepos]=useState([])

  const searchUser = async(str)=>{
    const [firstRepsonse,secondResponse] = await Promise.all([
      axios.get(`https://api.github.com/users/${str}`),
      axios.get(`https://api.github.com/users/${str}/repos`)
    ])
    setUser(firstRepsonse.data)
    setRepos(secondResponse.data)
    console.log(user,repos);
  }
  return (
    <div className="App">
        <Header 
        user={user}
        searchUser={searchUser}/>
        {user
        ?<UserInfo {...user}/>
        :<StartPage/>}
    </div>
  );
}
export default App;
