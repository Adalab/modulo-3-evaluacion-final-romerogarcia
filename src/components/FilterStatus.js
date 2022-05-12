function FilterStatus(props) {
  const handleSelect = (ev) => {
    props.handleInputStatus(ev.target.value);
  };
  return (
    <>
      <label className="filter__label" htmlFor="Status">
        Status
        <select
          className="filter__label__select"
          onChange={handleSelect}
          value={props.FilterStatus}
        >
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </label>
    </>
  );
}

export default FilterStatus;
