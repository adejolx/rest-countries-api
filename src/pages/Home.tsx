import { useState } from "react";
import Filter from "../components/Filter";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Toggle from "../components/Toggle";
import Wrapper from "../components/Wrapper";
import { CountryData } from "../@types/my-app/custom";
import useSearchFilter from "../utils/hooks/useSearchFilter";
import useFetch from "../utils/hooks/useFetch";

const Home = () => {
  const localDataSource = "data.json";
  const { data, loading, error } = useFetch<CountryData[]>({ localDataSource });
  const [searchValue, setSearchValue] = useState("");
  const { filteredData } = useSearchFilter<CountryData>({
    params: ["name"],
    query: searchValue,
    data: data!,
    debounceDelay: 300,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.trim().length === 0) setSearchValue("");
    setSearchValue(inputValue);
  };

  return (
    <div>
      <header>
        <NavBar>
          <Wrapper className={"cluster space-between"}>
            <a href="#" className="text:lg bold">
              Where in the world?
            </a>
            <Toggle />
          </Wrapper>
        </NavBar>
      </header>
      <main>
        <Wrapper className="stack-lg">
          <div className="cluster space-between">
            <SearchBar
              onChange={handleChange}
              value={searchValue}
              aria-label="Search for a country"
            />
            <Filter textChild="filter by region" />
          </div>
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <Grid data={filteredData} />
          )}
        </Wrapper>
      </main>
    </div>
  );
};
export default Home;
