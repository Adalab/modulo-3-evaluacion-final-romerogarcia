function FilterMovie(props) {
  const handleChange = (ev) => {
    props.hanldleFilterMovie(ev.target.value);
  };
  return (
    <>
      <label className="filter__label" htmlFor="Movie">
        Movie
        <input
          className="filter"
          type="text"
          name="movie"
          id="movie"
          value=""
          onChange={props.handleFilterMovie}
        ></input>
      </label>
    </>
  );
}

export default FilterMovie;
