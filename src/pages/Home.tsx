import { useMemo, useState } from "react";
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
  const filterCategories = useMemo(
    () => [...new Set(data?.map((item) => item.region))],
    [data]
  );
  const [values, setValues] = useState({
    searchValue: "",
    selectedValue: "",
  });

  const { filteredData: filteredRegions } = useSearchFilter({
    params: ["region"],
    query: values.selectedValue,
    data: data!,
    debounceDelay: 0,
  });

  const { filteredData: filteredCountries } = useSearchFilter({
    params: ["name"],
    query: values.searchValue.trim(),
    data: filteredRegions!,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (searchValue.trim().length === 0)
      setValues({ ...values, searchValue: "" });
    setValues({ ...values, searchValue });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setValues({ ...values, searchValue: "", selectedValue });
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
              value={values.searchValue}
              aria-label="Search for a country"
            />
            <Filter
              name="region_filter"
              aria-label="filter by region"
              categories={filterCategories}
              onChange={handleSelect}
              value={values.selectedValue}
            />
          </div>
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <Grid data={filteredCountries} />
          )}
        </Wrapper>
      </main>
    </div>
  );
};
export default Home;
