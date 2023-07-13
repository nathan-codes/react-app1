
import './App.css'
import Counter from './Counter'
import { useEffect, useState } from 'react' 
import './App.css'
import SearchIcon from './search.svg'
import Card from './Card'

const API_URL = "http://www.omdbapi.com?apikey=a6494859"

// const movie1 = {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
//     }





function App() {

  

  const [movies, SetMovies] = useState([]);


  const [value, setValue] = useState('');

  function handleChange(evt){
    setValue(evt.target.value);
  }


  useEffect(() => {
    searchMovies("Spiderman");
  }, [])

async function searchMovies (title) {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  SetMovies(data.Search);
}

  return (
    <>
      <div className='app'>
        <h1>MovieLand</h1>

        <div className="search">
          <input type="text" placeholder='Search for movies' value={value} onChange={handleChange} />
          <img src={SearchIcon} alt="search" 
            onClick={()=>searchMovies(value)}
          />
      </div>
       
        {
          movies.length > 0? (
          <div className="container">
              {
                movies.map((movie) => {
                  return <Card movie={movie}/>
                })
    }
      </div>
      ) : (
      <div className="empty">
      <h2>No movies found</h2></div>
          )
        }
        
        
        
      
      </div>
     
    </>
  )
}

export default App
