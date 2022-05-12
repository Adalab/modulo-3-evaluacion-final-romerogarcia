import '../styles/CharacterList.scss';
import '../styles/CharacterDetail.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NotFound from './NotFound';
import getList from '../services/Api';

function App() {
  //variables de estado
  const [dataList, setDataList] = useState([]);
  const [newNameValue, setNewNameValue] = useState('');
  const [FilterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    getList().then((dataFromApi) => {
      setDataList(dataFromApi);
    });
  }, []);

  //manejadoras
  const handleInputName = (value) => {
    setNewNameValue(value);
  };

  const handleInputStatus = (value) => {
    setFilterStatus(value);
  };

  //filtros
  const dataFilter = dataList
    .filter((series) => {
      return series.series.toLowerCase().includes(newNameValue.toLowerCase());
    })
    .filter((series) => {
      return FilterStatus === '' ? true : series.status === FilterStatus;
    });

  //datos de la película seleccionada por usuario
  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:characterId', pathname);
  const characterId =
    dataPath !== null ? parseInt(dataPath.params.characterId) : null;
  const characterFound = dataList.find((item) => item.id === characterId);
  console.log({ characterId, characterFound });

  return (
    <div div className="background-color">
      <h1 className="title--big">Rick and Morty Characters</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleInputName={handleInputName}
                dataFilter={dataFilter}
                handleInputStatus={handleInputStatus}
                FilterStatus={FilterStatus}
              />
              {/*Mi lista de peliculas*/}
              <CharacterList movieList={dataFilter} />
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={<CharacterDetail characterId={characterFound} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
