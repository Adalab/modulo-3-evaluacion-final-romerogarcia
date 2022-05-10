import FilterName from './FilterName';
import FilterYear from './FilterYear';
import FilterWow from './FilterWow';

function Filter(props) {
  return (
    <div className="container_filters">
      <FilterName handleInputName={props.handleInputName} />

      <FilterYear
        dataFilter={props.dataFilter}
        handleInputYear={props.handleInputYear}
        FilterYear={props.FilterYear}
      />

      <FilterWow
        dataFilter={props.dataFilter}
        handleInputWow={props.handleInputWow}
        FilterWow={props.FilterWow}
      />
    </div>
  );
}

export default Filter;
