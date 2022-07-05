import './Pagination.css'
import ArrowRight from "./../../icons/arrowright.png"
import ArrowLeft from "./../../icons/arrowleft.png"

export function Pagination(props){
    const {maxPages,
        paginate,
        nextPage,
        prevPage,
        currentPage
    }=props
    const pageNumbers=[]
    for(let i=1;i<=maxPages;i++){
        pageNumbers.push(i)
    }
    console.log(maxPages,pageNumbers);
    return(
        <div className='pagination'>
            <img src={ArrowLeft} onClick={()=>prevPage()}/>
            {
                pageNumbers.map(number=>(
                    <span className={currentPage===number? 'active':undefined} onClick={()=>paginate(number)} key={number}>{number}</span>
                ))
            }
            <img src={ArrowRight}  onClick={()=>nextPage()}/>
        </div>
    )
}