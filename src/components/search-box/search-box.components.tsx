import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
    className: string;
    placeholder?: string; //string or null
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ( {className, placeholder, onChangeHandler} : SearchBoxProps ) => (
    <input 
        className = {`search-box ${className}`} //search-box is the style
        type='search' 
        placeholder={placeholder} 
        onChange={onChangeHandler}
    />           
);

export default SearchBox;