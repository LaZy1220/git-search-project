import './NotFoundPage.css'
import User from "./../../icons/user.png"

export function NotFoundPage(){
    return(
        <div className='not-found-page'>
        <div className='not-found-page__body'>
            <img src={User} alt='not found'/>
            <p className='not-found-page__text'>User not found</p>
        </div>
    </div>
    )
}