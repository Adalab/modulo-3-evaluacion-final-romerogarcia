function FilterWow(props) {
  const handleSelect = (ev) => {
    props.handleInputWow(ev.target.value);
  };

  return (
    <>
      <label className="filter__label" htmlFor="Year">
        Wow's
        <select
          className="filter__label__select"
          onChange={handleSelect}
          value={props.FilterWow}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </label>
    </>
  );
}

export default FilterWow;
