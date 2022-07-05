import './UserInfo.css'
import Folowers from "./../../icons/shared.png"
import Folower from "./../../icons/provate.png"
import { RepositoriesList } from '../RepositoriesList/RepositoriesList'

export function UserInfo(props){
    const {avatar_url,
            login,
            name,
            html_url,
            followers,
            following,
            public_repos,
            repos}=props
    return(
        <div className='user-info conteiner'>
            <div className='user-info__body'>
                <div className='user-info'>
                    <img className='user-img' src={avatar_url}/>
                    <p className='user-name'><b>{name}</b></p>
                    <a className='user-link' href={html_url} target='blank'>{login}</a>
                    <br/>
                    <img className='foll-img' src={Folowers} alt='not found'/>
                    <span className='followers'>{followers} followers</span>
                    <img className='foll-img' src={Folower} alt='not found'/>
                    <span className='followers'>{following} following</span>
                </div>
                <div className='repositories'>
                    <h1>Repositories ({public_repos})</h1>
                    <RepositoriesList  repos={repos}/>
                </div>
            </div>
        </div>
    )
}