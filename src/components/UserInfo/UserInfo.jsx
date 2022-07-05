import './UserInfo.css'
import Folowers from "./../../icons/shared.png"
import Folower from "./../../icons/provate.png"

export function UserInfo(props){
    const {avatar_url,
            login,
            name,
            html_url,
            followers,
            following}=props
    return(
        <div className='user-info conteiner'>
            <div className='user-info__body'>
                <div className='user-info'>
                    <img className='user-img' src={avatar_url}/>
                    <p className='user-name'><b>{name}</b></p>
                    <a href={html_url} target='blank'>{login}</a>
                    <img src={Folowers} alt='not found'/>
                    <span>{followers} followers</span>
                    <img src={Folower} alt='not found'/>
                    <span>{following} following</span>
                </div>
                <div className='user-repo'>
                    <h3>Repositories 243</h3>
                    <div className='repositories'>
                        <a href='!#' className='repos-title'>MY WEB</a>
                        <p className='repos-description'>sdas asd asd asd asd asd as</p>
                    </div>
                </div>
            </div>
        </div>
    )
}