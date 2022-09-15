import SearchIcon from '../../icons/search';
import './style.scss';

export function SearchBar() {
    return (
        <div className='search'>
            <SearchIcon/>
            <p className='regular'>Rechercher</p>
            {/* <input type="search" className='search'/> */}
        </div>
    )
}