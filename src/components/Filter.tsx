import "./Filter.css";

type Props = {
  textChild: string;
  categories: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Filter = ({ textChild, categories, ...otherProps }: Props) => {
  return (
    <div className="filter-block">
      {/* <button className="filter-button">
        {textChild}
        <i className="fa-solid fa-angle-down filter-icon"></i>
      </button> */}
      <select name="" id="" {...otherProps}>
        {categories.map((item, index) => (
          <option key={`${item}-${index}`}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default Filter;
