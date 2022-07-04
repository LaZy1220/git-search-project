import { Header } from "./components/Header/Header";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { StartPage } from "./components/StartPage/StartPage";
import { useState } from "react";
import { UserInfo } from "./components/UserInfo/UserInfo";

function App() {
  const[user,setUser]=useState(null)
  const[repos,setRepos]=useState([])
  const searchUser = (str)=>{
    fetch(`https://api.github.com/users/${str}`)
    .then(response =>response.json())
    .then(data=>setUser(data))
    console.log(user);
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
