import "./Filter.css";

type Props = {
  categories: string[];
  name: string;
  id?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement> &
  React.AriaAttributes;

const Filter = ({ categories, name, id, ...otherProps }: Props) => {
  return (
    <div className="filter-block">
      <select name={name} id={id && id} {...otherProps}>
        <option value={""}>Filter By Region</option>
        {categories.map((item, index) => (
          <option key={`${item}-${index}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Filter;
