import '../styles/App.scss';
//import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Filters from './Filters';
//import ls from '../services/localStorage';
import getList from '../services/Api';
import MovieSceneList from './MovieSceneList';

function App() {
  //variables estado
  //guardamos mi lista de datos
  const [dataList, setDataList] = useState([]);
  const [movie, setMovie] = useState('');
  const [year, setYear] = useState('');
  const [filterMovie, setFilterMovie] = useState('all');
  const [FilterYear, setFilterYear] = useState('');

  //useffect para cargar los datos de la api
  useEffect(() => {
    getList().then((dataFromApi) => {
      setDataList(dataFromApi);
      console.log('holis');
    });
  }, []);

  //movies
  /*const handleMovie = (ev) => {
    setMovie(ev.target.value);
  };

  const handleYear = (ev) => {
    setYear(ev.target.value);
  };*/

  //filtrar movie
  const handleFilterMovie = (ev) => {
    setFilterMovie(ev.target.value);
  };

  //filtrar year
  const handleFilterYear = (ev) => {
    setFilterYear(ev.target.value);
  };

  //datos de las peliculas que pintamos
  const dataFilter = dataList
    .filter((data) => {
      if (FilterYear === 'all') {
        return true;
      } else if (FilterYear === data.year) {
        return true;
      } else {
        return false;
      }
    })
    .filter((data) => {
      return data.movie.toLowerCase().includes(filterMovie.toLocaleLowerCase());
    });

  return (
    <>
      <h1 className="title--big">Owen Wilson's "wow"</h1>
      <div className="container">
        <Filters
          handleFilterMovie={handleFilterMovie}
          handleFilterYear={handleFilterYear}
        />
        {/*Mi lista de peliculas
        <MovieSceneList movieList={dataList} />*/}
      </div>
    </>
  );
}

export default App;
