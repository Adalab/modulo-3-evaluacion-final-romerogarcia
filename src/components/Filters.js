import FilterName from './FilterName';
import FilterStatus from './FilterStatus';

function Filter(props) {
  return (
    <div className="container_filters">
      <FilterName handleInputName={props.handleInputName} />

      <FilterStatus
        dataFilter={props.dataFilter}
        handleInputStatus={props.handleInputStatus}
        FilterWow={props.FilterStatus}
      />
    </div>
  );
}

export default Filter;
