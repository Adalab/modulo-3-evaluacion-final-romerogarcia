import FilterName from './FilterName';
import FilterYear from './FilterYear';

function Filter(props) {
  return (
    <>
      <FilterName handleInputName={props.handleInputName} />

      <FilterYear
        dataFilter={props.dataFilter}
        handleInputYear={props.handleInputYear}
        FilterYear={props.FilterYear}
        
      />
    </>
  );
}

export default Filter;
