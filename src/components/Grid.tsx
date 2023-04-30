import { CountryData } from "../@types/my-app/custom";
import "./Grid.css";
import Card from "./Card";
import formatNumber from "../utils/formatNumber";

type Props<T extends Record<string, unknown>> = {
  data: T[] | null;
};
const Grid = ({ data }: Props<CountryData>) => {
  return (
    <>
      <ul className="grid">
        {data && data.length > 0 ? (
          data.map((datum, index) => {
            return (
              <Card
                index={index}
                key={datum.name}
                heading={datum.name}
                image={datum.flags.svg}
                alt={`flag of ${datum.name}`}
              >
                <p>
                  <strong>Population: </strong>
                  {formatNumber(datum.population)}
                </p>
                <p>
                  <strong>Region: </strong>
                  {datum.region}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {datum.capital}
                </p>
              </Card>
            );
          })
        ) : (
          <li>No Result(s)</li>
        )}
      </ul>
    </>
  );
};

export default Grid;
