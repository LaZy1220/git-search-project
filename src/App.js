import { Header } from "./components/Header/Header";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { StartPage } from "./components/StartPage/StartPage";
import { useState } from "react";
import { UserInfo } from "./components/UserInfo/UserInfo";
import axios from "axios";

function App() {
  const[user,setUser]=useState([])
  const[repos,setRepos]=useState([])
  const [currentPage,setCurrentPage]= useState(1)

  const reposPerPage = 4
  const lastReposIndex = currentPage* reposPerPage
  const firstReposIndex = lastReposIndex - reposPerPage
  const currentRepos = repos.slice(firstReposIndex,lastReposIndex)
  const maxPages = Math.ceil(repos.length/reposPerPage)

  const paginate =(pageNumber)=> setCurrentPage(pageNumber)
  const nextPage = ()=>setCurrentPage(prev =>{
    if(prev<maxPages){
        return prev+1
    }
    else{
        return maxPages
    }
})
const prevPage = ()=>setCurrentPage(prev => {
    if(prev>1){
        return prev-1
    }
    else return 1
})

  const searchUser = async(str)=>{
    try{
      const [firstRepsonse,secondResponse] = await Promise.all([
        axios.get(`https://api.github.com/users/${str}`),
        axios.get(`https://api.github.com/users/${str}/repos`)
      ])
      setUser(firstRepsonse.data)
      setRepos(secondResponse.data)
    }
    catch{
      setUser(['Error'])
    }
    console.log(user);
  }
  if(user.length===0){
    return (
      <div className="App">
        <Header 
        user={user}
        searchUser={searchUser}/>
        <StartPage/>
      </div>
    )
  }
  else if(user[0]==='Error'){
    return(
      <div className="App">
    <Header 
    user={user}
    searchUser={searchUser}/>
    <NotFoundPage/>
  </div>
    )
  }
  else{
    return(
      <div className="App">
      <Header 
      user={user}
      searchUser={searchUser}/>
      <UserInfo {...user}
         repos={currentRepos}
         maxPages={maxPages} 
         paginate={paginate}
         nextPage={nextPage}
         prevPage={prevPage}
         currentPage={currentPage}/>
      </div>
    )
  }
}
export default App;
