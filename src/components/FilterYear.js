function FilterYear(props) {
  const handleSelect = (ev) => {
    props.handleInputYear(ev.target.value);
    console.log('si filtro x año');
  };
  return (
    <>
      <label
        className="filter__label"
        htmlFor="Year"
        onChange={handleSelect}
        value={props.FilterYear}
      >
        Year
        <select className="filter__select">
          <option value="all">All</option>
          <option value="1996">1996</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2008">2008</option>
          <option value="2008">2008</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2017">2017</option>
        </select>
      </label>
    </>
  );
}

export default FilterYear;
