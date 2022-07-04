import './StartPage.css'
import Logo from "./../../icons/image.png"
export function StartPage(){
    return(
        <div className='start-page'>
            <div className='start-page__body'>
                <img src={Logo} alt='not found'/>
                <p className='start-page__text'>Start with searching a GitHub user</p>
            </div>
        </div>
    )
}