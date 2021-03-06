import '../styles/ListMovies.scss';
import '../styles/MovieDetails.scss';
import { useEffect, useState } from 'react';
import Filters from './Filters';
//import ls from '../services/localStorage';
import getList from '../services/Api';
import MovieSceneList from './MovieSceneList';
import { Routes, Route } from 'react-router-dom';
//coger datos de las rutas
import { matchPath, useLocation } from 'react-router';
import MovieSceneDetail from './MovieSceneDetail';
import NotFoundElement from './NotFoundElement';
//logo
import logo from '../images/logo.png';

function App() {
  //variables estado
  //guardamos mi lista de datos
  const [dataList, setDataList] = useState([]);
  //nuevo valor del nombre mi búsqueda
  const [newNameValue, setNewNameValue] = useState('');
  //valor filtro year
  const [FilterYear, setFilterYear] = useState('');
  const [FilterWow, setFilterWow] = useState('');

  //useffect para cargar los datos de la api
  useEffect(() => {
    getList().then((dataFromApi) => {
      setDataList(dataFromApi);
    });
  }, []);

  //input nombre película
  const handleInputName = (value) => {
    setNewNameValue(value);
  };

  //select años
  const handleInputYear = (value) => {
    setFilterYear(value);
  };

  //select wow
  const handleInputWow = (value) => {
    setFilterWow(value);
  };

  //datos de las peliculas que pintamos
  const dataFilter = dataList
    .filter((movie) => {
      return movie.movie.toLowerCase().includes(newNameValue.toLowerCase());
    })
    .filter((movie) => {
      return FilterYear === ''
        ? true
        : parseInt(movie.year) === parseInt(FilterYear);
    })
    .filter((movie) => {
      return FilterWow === ''
        ? true
        : parseInt(movie.total_wows_in_movie) === parseInt(FilterWow);
    });
  //datos de la película seleccionada por usuario
  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);
  const movieId = dataPath !== null ? parseInt(dataPath.params.movieId) : null;
  const movieFound = dataList.find((item) => item.id === movieId);
  console.log({ movieId, movieFound });

  return (
    <div className="background-color">
      <header className="header">
        <img src={logo} className="header__logo" alt="Logo Owen Wilson" />
        <h1 className="header__title--big">Owen Wilson's "Wow"</h1>
        <i className="fa-solid fa-bars fa-2x header__i"></i>
      </header>
      <section className="section">
        <p className="section__p">
          In our database of Owen Wilson's movies you can filter and listen to
          audio his mythical "WOW", choose the one you like the most.
        </p>
      </section>

      <Routes>
        {/*primera ruta listado + filtros*/}
        <Route
          path="/"
          element={
            <>
              <Filters
                handleInputName={handleInputName}
                dataFilter={dataFilter}
                handleInputYear={handleInputYear}
                FilterYear={FilterYear}
                handleInputWow={handleInputWow}
                FilterWow={FilterWow}
              />
              {/*Mi lista de peliculas*/}
              <MovieSceneList movieList={dataFilter} />
            </>
          }
        />
        {/*segunda ruta detalles*/}
        <Route
          path="/movie/:detailMovieId"
          element={<MovieSceneDetail movieId={movieFound} />}
        />
        <Route path="*" element={<NotFoundElement />} />
      </Routes>
    </div>
  );
}

export default App;
