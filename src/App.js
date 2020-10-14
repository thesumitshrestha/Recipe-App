import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";


const App = () => {
  const APP_ID = "2462d24c";
  const APP_KEY = "cf76cebcf55310c6c66764a46c90a2a6";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(" ");
  const [query, setQuery] = useState('chicken')

  useEffect(() => {

    const getReceipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json()
      setRecipes(data.hits);
      console.log(data);
    }
    getReceipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App container mt-5">
      <form onSubmit={getSearch} className="search-form">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-danger text-white" id="basic-addon3">Search Food</span>
          </div>
          <input className="form-control search-bar" type="text" value={search} onChange={updateSearch}/>
          {/*<button className="search-button btn btn-success" type="submit"> Submit</button>*/}
        </div>
      </form>
      <h5 className="text-left mt-5"> Showing results for <i className="text-danger"> {query} </i></h5>
      {recipes.length}
      <div className="mt-2 row">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            time={recipe.recipe.totalTime}
            healthLabels={recipe.recipe.healthLabels}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
