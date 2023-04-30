import { Link } from "react-router-dom";
import { CountryData } from "../@types/my-app/custom";

type Props<T> = {
  data: T[];
};
const CountryDetails = ({ data }: Props<CountryData>) => {
  return (
    <section>
      <h2 className="sr-only">Country details</h2>
      <div></div>
      <div>
        <Link to="/" className="button button--link">
          <i className="fa-solid fa-arrow-left"></i> Back
        </Link>
      </div>
    </section>
  );
};

export default CountryDetails;
