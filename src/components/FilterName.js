function FilterName(props) {
  const handleInput = (ev) => {
    props.handleInputName(ev.target.value);
  };
  return (
    <>
      <label className="filter__label" htmlFor="Name">
        Name
        <input
          className="filter__label__input"
          type="text"
          name="name"
          id="name"
          value={props.newNameValue}
          onChange={handleInput}
        ></input>
      </label>
    </>
  );
}

export default FilterName;
