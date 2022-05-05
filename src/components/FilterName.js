function FilterMovie(props) {
  const handleInput = (ev) => {
    props.handleInputName(ev.target.value);
  };
  return (
    <>
      <label className="filter__label" htmlFor="Movie">
        Movie
        <input
          className="filter__label__input"
          type="text"
          name="movie"
          id="movie"
          value={props.newNameValue}
          onChange={handleInput}
        ></input>
      </label>
    </>
  );
}

export default FilterMovie;
