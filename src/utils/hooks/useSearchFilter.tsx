import { useEffect, useMemo, useState } from "react";
import { ObjectWithParams } from "../../@types/my-app/custom";
import filterString from "../filterString";
import debounce from "../debounce";

type Props<T> = {
  params: string[];
  query: string;
  data: T[];
  debounceDelay?: number;
};

function useSearchFilter<T extends ObjectWithParams>({
  params,
  query,
  data,
  debounceDelay = 300,
}: Props<T>) {
  const [filteredData, setFilteredData] = useState(data);

  const runFilterSearch = (
    objArr: T[],
    paramsArr: string[],
    queryStr: string
  ): void => {
    const filtered = filterString(objArr, paramsArr, queryStr);
    setFilteredData(filtered);
  };

  const debouncedResults = useMemo(
    () => debounce(runFilterSearch, debounceDelay),
    []
  );

  useEffect(() => {
    debouncedResults(data, params, query);
  }, [data, params, query]);

  return {
    filteredData,
  };
}

export default useSearchFilter;
