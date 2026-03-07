
import { APIKEY } from "./config/key"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Container, MovieList, SearchBar, Movie } from "./style"

function Home() {
    const img_path = 'https://image.tmdb.org/t/p/w500';

    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const [genero, setGenero] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)

    const location = useLocation
    const queryParams = new URLSearchParams(location.search)
    const tipoSelecionado = queryParams.get('tipo')

    useEffect(() => {
        setLoading(true)
        const fetchMovies = fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=pt-BR`).then(res => res.json())

        const fetchSeries = fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=pt-BR`).then(res => res.json())

        Promise.all([fetchMovies, fetchSeries]).then(([movieData, seriesData]) => {
            setMovies(movieData.results || [])
            setSeries(seriesData.results || [])
            setLoading(false)

        }).catch((error) => {
            console.error("Erro ao buscar dados no servidor")
            setLoading(false)
        })
    }, [])

    const filtrar = (lista) => {
        return lista.filter((item) => {
            const nomeDoItem = (item.title || item.name).toLowerCase()
            const matchesSearch = nomeDoItem.includes(search.toLocaleLowerCase())
            const matchesGenre = genero === '' || item.genre_ids.includes(Number(genero))
            return matchesSearch && matchesGenre
        })
    }


    return (
        <Container>
            <SearchBar>
                <div className="field-group">
                    <label>O que você procura?</label>
                    <input type="text" placeholder="Ex: O agente Secreto" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="field-group">
                    <label>Gênero</label>
                    <select type="text" value={genero} onChange={(e) => setGenero(e.target.value)}>
                        <option value="">Todos os Gêneros</option>
                        <option value='28'>Ação</option>
                        <option value='35'>Comédia</option>
                        <option value='18'>Drama</option>
                        <option value='27'>Terror</option>
                    </select>
                </div>
                <button className="btn-limpar" onClick={() => {
                    setSearch('');
                    setGenero('')
                }}>Limpar Filtros</button>
            </SearchBar>

            <h2>Filmes Bem avaliados</h2>
            <MovieList>
                {filtrar(movies).map(movie =>
                    <Movie key={movie.id}>
                        <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
                        <span>{movie.title}</span>
                    </Movie>
                )}
            </MovieList>


            <h2>Series Populares</h2>
            <SearchBar>
                <div className="field-group">
                    <label>O que você procura?</label>
                    <input type="text" placeholder="Ex: O agente Secreto" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="field-group">
                    <label>Gênero</label>
                    <select type="text" value={genero} onChange={(e) => setGenero(e.target.value)}>
                        <option value="">Todos os Gêneros</option>
                        <option value='28'>Ação</option>
                        <option value='35'>Comédia</option>
                        <option value='18'>Drama</option>
                        <option value='27'>Terror</option>
                    </select>
                </div>
                <button className="btn-limpar" onClick={() => {
                    setSearch('');
                    setGenero('')
                }}>Limpar Filtros</button>
            </SearchBar>

            <MovieList>
                {filtrar(series).map(serie =>
                    <Movie key={serie.id}>
                        <img src={`${img_path}${serie.poster_path}`} alt={serie.title} />
                        <span>{serie.title}</span>
                    </Movie>
                )}
            </MovieList>

        </Container>
    )
}

export default Home
