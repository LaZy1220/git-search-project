import './UserInfo.css'
import Folowers from "./../../icons/shared.png"
import Folower from "./../../icons/provate.png"
import { RepositoriesList } from '../RepositoriesList/RepositoriesList'
import { Pagination } from '../Pagination/Pagination'

export function UserInfo(props){
    const {avatar_url,
            login,
            name,
            html_url,
            followers,
            following,
            public_repos,
            repos,
            maxPages,
            paginate,
            nextPage,
            prevPage,
            currentPage}=props
    return(
        <div className='user-info conteiner'>
            <div className='user-info__body'>
                <div className='user'>
                    <img className='user-img' src={avatar_url}/>
                    <div className='user-card'>
                        <p className='user-name'><b>{name}</b></p>
                        <a className='user-link' href={html_url} target='blank'>{login}</a>
                        <br/>
                        <img className='foll-img' src={Folowers} alt='not found'/>
                         <span className='followers'>{followers} followers</span>
                         <br/>
                         <img className='foll-img' src={Folower} alt='not found'/>
                         <span className='followers'>{following} following</span>
                    </div>
                </div>
                <div className='repositories'>
                    <h1>Repositories ({public_repos})</h1>
                    <RepositoriesList  repos={repos}/>
                </div>
                {repos.length
                    ?<Pagination maxPages={maxPages} 
                        paginate={paginate}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        currentPage={currentPage}/>
                        :''}
            </div>
        </div>
    )
}