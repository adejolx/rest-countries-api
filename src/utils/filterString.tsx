import { ObjectWithParams } from "../@types/my-app/custom";

function filterString<T extends ObjectWithParams>(
  objArray: T[],
  searchParamsArr: Array<keyof T>,
  queryStr: string
) {
  return objArray.filter((item) =>
    searchParamsArr.some(
      (param) =>
        item[param]!.toString()
          .toLowerCase()
          .trim()
          .indexOf(queryStr.toLowerCase()) > -1
    )
  );
}

export default filterString;
