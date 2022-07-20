import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {searchTerm,setSearchTerm} = useGlobalContext();
  const reference = React.useRef('');// Setting up an uncontrolled input
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const searchCocktail = ()=>{
    setSearchTerm(reference.current.value);
  }
  React.useEffect(() =>{
    reference.current.focus();
  },[])
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your fav cocktail</label>
          <input
            type="text"
            id="name"
            ref={reference}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm
