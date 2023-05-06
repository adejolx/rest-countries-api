import { Link, useLoaderData, useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { CountryData } from "../@types/my-app/custom";
import findIndex from "../utils/findIndex";
import "./Details.css";
import formatNumber from "../utils/formatNumber";

const CountryDetails = () => {
  const data = useLoaderData() as CountryData[];
  const { countryId } = useParams();
  const index = findIndex(data, "name", countryId) as number;

  return (
    data && (
      <Wrapper>
        <section className="stack-sm container--details">
          <h2 className="sr-only">Country details</h2>
          <Wrapper className="cluster flex-start-x">
            <Link to="/" className="button button--link">
              <i className="fa-solid fa-arrow-left"></i> Back
            </Link>
          </Wrapper>
          <Wrapper className="switcher">
            <div>
              <img src={data[index]?.flags?.svg} />
            </div>
            <article className="stack-md country-info">
              <h3 className="title">{data[index]?.name}</h3>
              <ul className="info-list switcher">
                <div className="list-group stack-sm">
                  <li>
                    <span>Native Name:</span> {data[index]?.nativeName}
                  </li>
                  <li>
                    <span>Population:</span>{" "}
                    {formatNumber(data[index]?.population)}
                  </li>
                  <li>
                    <span>Region:</span> {data[index]?.region}
                  </li>
                  <li>
                    <span>Sub Region:</span> {data[index]?.subregion}
                  </li>
                  <li>
                    <span>Capital:</span> {data[index]?.capital}
                  </li>
                </div>
                <div className="list-group stack-sm">
                  <li>
                    <span>Top Level Domain:</span> {data[index]?.topLevelDomain}
                  </li>
                  <li>
                    <span>Currencies:</span>{" "}
                    {data[index]?.currencies?.map((curr) => (
                      <span key={curr?.name} className="unbold">
                        {curr?.name},{" "}
                      </span>
                    ))}
                  </li>
                  <li>
                    <span>Languages:</span>{" "}
                    {data[index]?.languages?.map((lang) => (
                      <span key={lang?.name} className="unbold">
                        {lang?.name},{" "}
                      </span>
                    ))}
                  </li>
                </div>
              </ul>
              <div className="cluster flex-start-x">
                <span>Border Countries:</span>
                <div className="cluster flex-start-x">
                  {data[index]?.borders?.map((border) => {
                    const newIndex = findIndex(data, "alpha3Code", border);
                    return (
                      <Link
                        to={`../../countries/${data[newIndex as number].name}`}
                        className="button button--link"
                        key={newIndex}
                      >
                        {typeof newIndex === "number"
                          ? data[newIndex].name
                          : newIndex}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </article>
          </Wrapper>
        </section>
      </Wrapper>
    )
  );
};

export default CountryDetails;
