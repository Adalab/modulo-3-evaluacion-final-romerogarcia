const getList = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item, index) => {
        return {
          name: item.name,
          status: item.status,
          species: item.species,
          image: item.image,
          id: index,
          episode: item.episode,
        };
      });
      return cleanData;
    });
};

//EXPORTAR EL SERVICIO FETCH
export default getList;
