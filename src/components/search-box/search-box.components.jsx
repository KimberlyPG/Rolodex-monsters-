import './search-box.styles.css';

const SearchBox = ( {className, placeholder, onChangeHandler} ) => (
    <input 
        className = {`search-box ${className}`} //search-box is the style
        type='search' 
        placeholder={placeholder} 
        onChange={onChangeHandler}
    />           
);

export default SearchBox;