import "./Filter.css";

const Filter = ({ textChild }: { textChild: string }) => {
  return (
    <div className="filter-block">
      <button className="filter-button">
        {textChild}
        <i className="fa-solid fa-angle-down filter-icon"></i>
      </button>
    </div>
  );
};
export default Filter;
