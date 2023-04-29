import { CountryData } from "../@types/my-app/custom";
import "./Grid.css";
import Card from "./Card";

type Props<T extends Record<string, unknown>> = {
  data: T[] | null;
};
const Grid = ({ data }: Props<CountryData>) => {
  return (
    <>
      <div className="grid">
        {data && data.length > 0 ? (
          data.map((datum) => {
            return (
              <Card
                key={datum.name}
                heading={datum.name}
                image={datum.flags.svg}
                alt={`flag of ${datum.name}`}
              >
                <p>
                  <strong>Population: </strong>
                  {datum.population}
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
          <p>No Result(s)</p>
        )}
      </div>
    </>
  );
};

export default Grid;
