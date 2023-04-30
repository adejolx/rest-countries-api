import { Link, useLoaderData, useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { CountryData } from "../@types/my-app/custom";
import findIndex from "../utils/findIndex";

const CountryDetails = () => {
  const data = useLoaderData() as CountryData[];
  const { countryIndex } = useParams();
  const index = parseInt(countryIndex as string);

  return (
    data && (
      <section>
        <h2 className="sr-only">Country details</h2>
        <div></div>
        <div>
          <Link to="/" className="button button--link">
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>
        </div>
        <Wrapper>
          <div>
            <img src={data[index]?.flags?.svg} />
          </div>
          <article>
            <h3>{data[index]?.name}</h3>
            <ul>
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
              <li>
                <span>Top Level Domain:</span> {data[index]?.topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span>{" "}
                {data[index]?.currencies?.map((curr) => (
                  <span key={curr?.name}>{curr?.name},</span>
                ))}
              </li>
              <li>
                <span>Languages:</span>{" "}
                {data[index]?.languages?.map((lang) => (
                  <span key={lang?.name}>{lang?.name},</span>
                ))}
              </li>
            </ul>
            <div>
              Border Countries:
              {data[index]?.borders?.map((border) => (
                <Link
                  to={`../../countries/${findIndex(
                    data,
                    "alpha3Code",
                    border
                  )}`}
                >
                  {border}
                </Link>
              ))}
            </div>
          </article>
        </Wrapper>
      </section>
    )
  );
};

export default CountryDetails;
