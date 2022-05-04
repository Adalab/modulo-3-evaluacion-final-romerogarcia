import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filter(props) {
  return (
    <>
      <FilterMovie handleFilterMovie={props.handleFilterMovie} />

      <FilterYear handleFilterYear={props.handleFilterYear} />
    </>
  );
}

export default Filter;
