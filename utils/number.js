export const createPrice = (number) => {
  let strNumber = number.toString();
  strNumber = strNumber.replace(/,/g, "");
  const parts = strNumber.split(".");
  let integerPart = parts[0];
  const decimalPart = parts.length > 1 ? "." + parts[1] : "";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(integerPart)) {
    integerPart = integerPart.replace(rgx, "$1,$2");
  }
  return integerPart + decimalPart;
};

export const createNumber = (item) => {
  let strNumber = item.toString();
  let newString = strNumber.replace(/,/g, "");
  let toNumber = Number(newString);
  return toNumber;
};
