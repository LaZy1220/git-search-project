import './Repository.css'

export function Repository(props){
    const {name,
        html_url,
        description,}=props
        return(
            <div className='repository'>
                <div className='repository__body'>
                <a className='rep-link' href={html_url} target='blank'>{name}</a>
                    {description?<p className='rep-description'>{description}</p>:<p className='rep-description'>This repository has no description</p>}
                </div>
            </div>
        )
}