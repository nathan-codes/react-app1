import React from 'react'
import './App.CSS'


function Card({movie}) {
  return (
    <div>   
             <div className='movie'>
            <div>
              <p>  {movie.Year} </p>
            </div>

            <div>
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="" />
            
            </div>
            <div>
              <span>
                {movie.Type}
                <h3>{movie.Title}</h3>
                </span></div>
          </div>
          
    </div>
  )
}

export default Card
