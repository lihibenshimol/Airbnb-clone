// import searchIcon from '../assets/img/img/icons/search-magnifying'
import { BiSearch } from 'react-icons/bi'

export function StayFilter() {




    return (
        <>
            <article className='stay-filter'>
                <div className='anywhere action'>Anywhere</div>
                <span className='seperator'>|</span>
                <div className='anyweek action'>Any week</div>
                <span className='seperator'>|</span>
                <div className='add-guest action'>Add guests</div>
                <span className='search'> <BiSearch /> </span>
            </article>


        </>
    )
}