import { Repository } from '../Repository/Repository'
import './RepositoriesList.css'

export function RepositoriesList(props){
    const {repos} = props
    return(
        <div className='repos-list'>
            {
                repos.map((item)=>(
                    <Repository key={item.id} {...item}/>
                ))
            }
        </div>
    )
}