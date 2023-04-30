const formatNumber = (arg: number) => {
  // Convert the number to a string
  const strNumber = arg.toString();

  // Split the number into integer and decimal parts
  const parts = strNumber.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";

  // Add commas to the integer part
  const reversed = integerPart.split("").reverse().join("");
  const commaSeparated = reversed.match(/.{1,3}/g)?.join(",");
  const integerResult = commaSeparated?.split("").reverse().join("");

  // Combine the integer and decimal parts
  const result = decimalPart
    ? integerResult + "." + decimalPart
    : integerResult;

  return result;
};

export default formatNumber;
