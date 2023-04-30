import { useEffect, useMemo, useState } from "react";
import Filter from "../components/Filter";
import Grid from "../components/Grid";
import SearchBar from "../components/SearchBar";
import Toggle from "../components/Toggle";
import Wrapper from "../components/Wrapper";
import useSearchFilter from "../utils/hooks/useSearchFilter";
import { useLoaderData, useNavigation } from "react-router-dom";
import { CountryData } from "../@types/my-app/custom";

const Home = ({ initialTheme = "dark" }) => {
  const data = useLoaderData() as CountryData[];
  const navigation = useNavigation();

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
    <>
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
        {navigation.state === "loading" ? (
          <p>Data is Loading...</p>
        ) : (
          <Grid data={filteredCountries} />
        )}
      </Wrapper>
    </>
  );
};
export default Home;
