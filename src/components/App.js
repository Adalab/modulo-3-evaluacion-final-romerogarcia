import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Filters from './Filters';
//import ls from '../services/localStorage';
import getList from '../services/Api';
import MovieSceneList from './MovieSceneList';
import { Routes, Route } from 'react-router-dom';
//coger datos de las rutas
import { matchPath, useLocation } from 'react-router';
import MovieSceneDetail from './MovieSceneDetail';

function App() {
  //variables estado
  //guardamos mi lista de datos
  const [dataList, setDataList] = useState([]);
  //nuevo valor del nombre mi búsqueda
  const [newNameValue, setNewNameValue] = useState('');
  //valor filtro year
  const [FilterYear, setFilterYear] = useState('');

  //useffect para cargar los datos de la api
  useEffect(() => {
    getList().then((dataFromApi) => {
      setDataList(dataFromApi);
      console.log('holis');
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

  //datos de las peliculas que pintamos
  const dataFilter = dataList
    .filter((movie) => {
      return movie.movie.toLowerCase().includes(newNameValue.toLowerCase());
    })
    .filter((movie) => {
      return FilterYear === ''
        ? true
        : parseInt(movie.year) === parseInt(FilterYear);
    });

  //datos de la película seleccionada por usuario
  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);
  const movieId = dataPath !== null ? parseInt(dataPath.params.movieId) : null;
  const movieFound = dataList.find((item) => item.id === movieId);
  console.log({ movieId, movieFound });
  return (
    <>
      <h1 className="title--big">Owen Wilson's "wow"</h1>
      <div className="container">
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
        </Routes>
      </div>
    </>
  );
}

export default App;
