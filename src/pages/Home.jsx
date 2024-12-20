import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery,setSearchQuery]= useState("");
    const movies = [
        {id:1, title :"John Wick", release_date:"2014"},
        {id:2, title :"Terminator 2", release_date:"2016"},
        {id:3, title :"Kevin Katan 3", release_date:"2018"},
        {id:4, title :"Kill-Bill 4", release_date:"2020"}
    ]
    const handleSearch =(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")    }
    return  <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input  type="text" 
                            placeholder="Search for a movie" 
                            className="search-input"
                            value={searchQuery}
                            onChange ={(e)=> setSearchQuery(e.target.value)} 
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
                <div className="movies-grid">
                    {movies.map(movie =>( 
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />))}
                </div>
            </div>
}

export default Home