import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Container, MovieList,  Movie } from "../style";

function Favorites(){
    //Variável/Gaveta para guardar os item que estão no Local Storage
     const [favs, setFavs] = useState([])


     const img_path = 'https://image.tmdb.org/t/p/w500/'


     useEffect(()=>{
        const savedFavs = JSON.parse(localStorage.getItem('favorites'))
        setFavs(savedFavs)
     },[])

     function removeFavorite(id){
        const updateFavs = favs.filter(movie => movie.id !== id)
        setFavs(updateFavs)
        localStorage.setItem('favorites',JSON.stringify(updateFavs))
     }

     
return(<>
<Header/>
<Container>
    {favs.length === 0 ?(
        <p style={{textAlign: 'center', marginTop: '3rem',
            color: '#aaa', fontSize: '70pxd'}}>
            Você ainda não salvou nenhum favorito!
        </p>
    ):(
    <MovieList>
        {favs.map(movie => 
            (<Movie key={movie.id}>
                <Link to={`/details/movie/${movie.id}`}>
                <img src={`${img_path}${movie.poster}`}
                alt={movie.title}/>
                </Link>
              <span>{movie.title}</span>  

              <button className="favorite-btn active"
              onClick={()=> removeFavorite(movie.id)}
              >Remover
              </button>
            </Movie>))}
    </MovieList>
    )}
</Container>
<Footer/>
</>)
    
}

export default Favorites