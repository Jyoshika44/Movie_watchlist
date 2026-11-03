
import { useEffect, useState } from 'react';
import './App.css';

const initialMovies = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
  },
  {
    id: 2,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.7,
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: 9.0,
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
  {
    id: 4,
    title: 'Dune: Part Two',
    year: 2024,
    genre: 'Adventure',
    rating: 8.5,
    poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
  },
  {
    id: 5,
    title: 'Spider-Man: No Way Home',
    year: 2021,
    genre: 'Action',
    rating: 8.2,
    poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: 6,
    title: 'Avatar',
    year: 2009,
    genre: 'Fantasy',
    rating: 7.9,
    poster: "/poster/avatar.jpg",
  },
  {
    id: 7,
    title: 'The Avengers',
    year: 2012,
    genre: 'Action',
    rating: 8.0,
    poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
  },
  {
    id: 8,
    title: 'Joker',
    year: 2019,
    genre: 'Drama',
    rating: 8.4,
    poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
  },
  {
    id: 9,
    title: "RRR",
    genre: "Action",
    year: 2022,
    rating: 7.8,
    poster: "https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
    inWatchlist: true,
    watched: false,
  },
  
{
  id: 10,
  title: "Pushpa: The Rise",
  year: 2021,
  genre: "Action",
  rating: 7.6,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UYffkP5LYfx1W_SUnWI_u9frgh4W5oUf3fSDo48Hnw&s",
  inWatchlist: true,
  watched: false,
},
{
  id: 11,
  title: "Jersey",
  year: 2019,
  genre: "Drama",
  rating: 8.5,
  poster: '/poster/jersey.jpg',
  inWatchlist: false,
  watched: false,
},
{
  id: 12,
  title: "Sita Ramam",
  year: 2022,
  genre: "Romance",
  rating: 8.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7b_qu9GmRULjWMvoeb0AvcoKBVOIicLh8xaX2VkMOHA&s=10",
  inWatchlist: true,
  watched: false,
},
{
  id: 13,
  title: "Hi Nanna",
  year: 2023,
  genre: "Romance",
  rating: 8.2,
  poster: "/poster/hi nanna.jpg",
  inWatchlist: false,
  watched: false,
},
{
  id: 14,
  title: "Ala Vaikunthapurramuloo",
  year: 2020,
  genre: "Comedy",
  rating: 7.3,
  poster: "/poster/ala.jpg",
  inWatchlist: true,
  watched: false,
},
{
  id: 15,
  title: "DJ Tillu",
  year: 2022,
  genre: "Comedy",
  rating: 7.2,
  poster: "/poster/dj tillu.jpg",
  inWatchlist: false,
  watched: false,
},
{
  id: 16,
  title: "Hanu-Man",
  year: 2024,
  genre: "Fantasy",
  rating: 7.8,
  poster: "/poster/hanuman.jpg",
  inWatchlist: true,
  watched: false,
},
{
  id: 17,
  title: "Eega",
  year: 2012,
  genre: "Fantasy",
  rating: 7.7,
  poster: "/poster/EEga.jpg",
  inWatchlist: false,
  watched: false,
},
{
  id: 18,
  title: "Magadheera",
  year: 2009,
  genre: "Action",
  rating: 7.7,
  poster: "/poster/magadhera.jpg",
  inWatchlist: true,
  watched: false,
},
{
  id: 19,
  title: "Pokiri",
  year: 2006,
  genre: "Action",
  rating: 8.0,
  poster: "/poster/pokiri.jpg",
  inWatchlist: false,
  watched: false,
},
{
  id: 20,
  title: "Arjun Reddy",
  year: 2017,
  genre: "Romance",
  rating: 7.9,
  poster: "/poster/arjun reddy.jpg",
  inWatchlist: true,
  watched: false,
},
{
  id: 21,
  title: "Rangasthalam",
  year: 2018,
  genre: "Drama",
  rating: 8.2,
  poster: "/poster/rang.jpg",
  inWatchlist: false,
  watched: false,
},
{
  id: 22,
  title: "Dasara",
  year: 2023,
  genre: "Action",
  rating: 6.6,
  poster: "/poster/dasara.jpg",
  inWatchlist: true,
  watched: false,
},
{
  id: 23,
  title: "Lucky Baskhar",
  year: 2024,
  genre: "Drama",
  rating: 8.0,
  poster: "/poster/lb.jpg",
  inWatchlist: false,
  watched: false,
},


];


function loadMovies() {
  try {
    const saved = localStorage.getItem('movie-watchlist-data');

    if (saved) {
      const savedMovies = JSON.parse(saved);

      return savedMovies.map((movie) => {
        const originalMovie = initialMovies.find(
          (item) => item.id === movie.id
        );

        return originalMovie
          ? { ...movie, poster: originalMovie.poster }
          : movie;
      }).concat(
        initialMovies.filter(
          (movie) => !savedMovies.some((savedMovie) => savedMovie.id === movie.id)
        )
      );
    }

    return initialMovies;
  } catch {
    return initialMovies;
  }
}



function App() {
  const [movies, setMovies] = useState(loadMovies);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [genre, setGenre] = useState('All');

  useEffect(() => {
    try {
      localStorage.setItem('movie-watchlist-data', JSON.stringify(movies));
    } catch {
      // The app remains usable if browser storage is unavailable.
    }
  }, [movies]);

  function toggleWatchlist(id) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === id
          ? {
              ...movie,
              inWatchlist: !movie.inWatchlist,
              watched: movie.inWatchlist ? false : movie.watched,
            }
          : movie
      )
    );
  }

  function toggleWatched(id) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === id
          ? {
              ...movie,
              inWatchlist: true,
              watched: !movie.watched,
            }
          : movie
      )
    );
  }

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesGenre = genre === 'All' || movie.genre === genre;

    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'watchlist' && movie.inWatchlist && !movie.watched) ||
      (activeTab === 'watched' && movie.watched);

    return matchesSearch && matchesGenre && matchesTab;
  });

  const watchlistCount = movies.filter(
    (movie) => movie.inWatchlist && !movie.watched
  ).length;

  const watchedCount = movies.filter((movie) => movie.watched).length;

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">▶</span>
          CineTrack
        </a>
        <span className="nav-caption">YOUR PERSONAL MOVIE SPACE</span>
      </header>

      <main className="container" id="home">
        <section className="hero">
          <p className="eyebrow">YOUR MOVIES. YOUR COLLECTION.</p>
          <h1>
            Every movie has
            <br />
            a <span>place on your list.</span>
          </h1>
          <p className="hero-text">
            Discover your next favorite, keep track of what to watch,
            and celebrate every movie you finish.
          </p>

          <div className="stats">
            <div className="stat-card">
              <span className="stat-icon">🎬</span>
              <div>
                <strong>{movies.length}</strong>
                <span>Total movies</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🔖</span>
              <div>
                <strong>{watchlistCount}</strong>
                <span>To watch</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">✓</span>
              <div>
                <strong>{watchedCount}</strong>
                <span>Watched</span>
              </div>
            </div>
          </div>
        </section>

        <section className="library">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR PERSONAL LIBRARY</p>
              <h2>Explore movies</h2>
            </div>
            <span className="movie-count">
              {filteredMovies.length} movies
            </span>
          </div>

          <div className="controls">
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Search movies..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search movies by title"
              />
            </label>

            <select
              className="genre-select"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
              aria-label="Filter by genre"
            >
              <option value="All">All genres</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Drama">Drama</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>

          <div className="tabs" aria-label="Movie filters">
            <button
              className={activeTab === 'all' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('all')}
            >
              All Movies
            </button>
            <button
              className={activeTab === 'watchlist' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('watchlist')}
            >
              My Watchlist
            </button>
            <button
              className={activeTab === 'watched' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('watched')}
            >
              Watched
            </button>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="movie-grid">
              {filteredMovies.map((movie) => (
                <article className="movie-card" key={movie.id}>
                  <div className="poster-wrap">
                    <img
                      className="poster"
                      src={movie.poster}
                      alt={`${movie.title} poster`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="rating">★ {movie.rating}</span>
                    {movie.watched && (
                      <span className="watched-badge">✓ Watched</span>
                    )}
                  </div>

                  <div className="movie-info">
                    <div className="movie-meta">
                      <span>{movie.year}</span>
                      <span className="meta-dot">•</span>
                      <span>{movie.genre}</span>
                    </div>

                    <h3>{movie.title}</h3>

                    <button
                      className={
                        movie.inWatchlist
                          ? 'action-button added'
                          : 'action-button'
                      }
                      onClick={() => toggleWatchlist(movie.id)}
                    >
                      {movie.inWatchlist
                        ? '✓ In My Watchlist'
                        : '+ Add to Watchlist'}
                    </button>

                    {movie.inWatchlist && (
                      <button
                        className="watched-button"
                        onClick={() => toggleWatched(movie.id)}
                      >
                        {movie.watched
                          ? '↩ Mark as Unwatched'
                          : '✓ Mark as Watched'}
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>🎞️</span>
              <h3>No movies found</h3>
              <p>Try another search or change your filters.</p>
              <button
                className="reset-button"
                onClick={() => {
                  setSearch('');
                  setGenre('All');
                  setActiveTab('all');
                }}
              >
                Show all movies
              </button>
            </div>
          )}
        </section>

        <footer className="footer">
          <span>🎬 CineTrack</span>
          <p>Made for movie lovers, one film at a time.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
