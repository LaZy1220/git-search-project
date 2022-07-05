import './Header.css'
import { Search } from '../Search/Search'
import Logo from "./../../icons/Vector.png"

export function Header(props){
    const {searchUser,user}=props
    return (
        <header className='header'>
            <img className='logo' src={Logo} alt='not found'/>
            <Search 
            user={user}
            searchUser={searchUser}/>
        </header>
    )
}