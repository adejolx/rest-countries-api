const findIndex = (array: any[], key: string, value: any) => {
  if (array) return array.findIndex((obj) => obj[key] === value);

  return "Incorrect arguments";
};

export default findIndex;
