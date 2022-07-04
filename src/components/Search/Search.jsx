import { useState } from 'react';
import './Search.css'

export function Search(props){
    const{searchUser}=props
    const[search,setSearch]=useState('')

   
    const onSubmit = event =>{
        if(event.key !== 'Enter'){
            return
        }
        if(search.trim()){
            searchUser(search)
        }
        else{
            alert('Введите данные пользователя')
        }
    }
    return(
        <div className='input-field'>
            <input
                className='search'
                type='search'
                placeholder = 'Enter GitHub username'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={onSubmit}
            />
        </div>
    )
}