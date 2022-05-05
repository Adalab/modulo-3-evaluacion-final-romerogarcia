import FilterName from './FilterName';
import FilterYear from './FilterYear';

function Filter(props) {
  return (
    <div className="container_filters">
      <FilterName handleInputName={props.handleInputName} />

      <FilterYear
        dataFilter={props.dataFilter}
        handleInputYear={props.handleInputYear}
        FilterYear={props.FilterYear}
      />
    </div>
  );
}

export default Filter;
