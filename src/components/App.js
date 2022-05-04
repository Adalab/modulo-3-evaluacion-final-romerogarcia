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
  //nuevo valor de mi búsqueda
  const [newNameValue, setNewNameValue] = useState('');
  //valor filtro year
  const [FilterYear, setFilterYear] = useState('');
  const [movie, setMovie] = useState('');
  const [year, setYear] = useState('');
  const [filterMovie, setFilterMovie] = useState('all');

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

  return (
    <>
      <h1 className="title--big">Owen Wilson's "wow"</h1>
      <div className="container">
        <Filters
          handleInputName={handleInputName}
          dataFilter={dataFilter}
          handleInputYear={handleInputYear}
          FilterYear={FilterYear}
        />
        {/*Mi lista de peliculas*/}
        <MovieSceneList movieList={dataFilter} />
      </div>
    </>
  );
}

export default App;
