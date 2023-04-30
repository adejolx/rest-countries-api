import { Link, useLoaderData, useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { CountryData } from "../@types/my-app/custom";
import findIndex from "../utils/findIndex";
import "./Details.css";

const CountryDetails = () => {
  const data = useLoaderData() as CountryData[];
  const { countryIndex } = useParams();
  const index = parseInt(countryIndex as string);

  return (
    data && (
      <Wrapper>
        <section className="stack-sm">
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
                    <span>Population:</span> {data[index]?.population}
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
                      <span key={curr?.name}>{curr?.name}, </span>
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
                  {data[index]?.borders?.map((border) => (
                    <Link
                      to={`../../countries/${findIndex(
                        data,
                        "alpha3Code",
                        border
                      )}`}
                      className="button button--link"
                    >
                      {border}
                    </Link>
                  ))}
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
