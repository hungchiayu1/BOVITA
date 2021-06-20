import { DollarSign } from "react-feather";

//produce dollar icon based on brand.price
//input: nil
//output: array of <DollarSign /> components with different colours depending on brand.price
export function priceHandler(brandPrice) {
  var dollarSigns = [];
  for (let x = 0; x < brandPrice; x++) {
    dollarSigns.push(
      <DollarSign
        style={{ verticalAlign: "top" }}
        key={x + 1}
        color="#616161"
        size={16}
        strokeWidth={1}
      />
    );
  }
  for (let y = 0; y < 3 - brandPrice; y++) {
    dollarSigns.push(
      <DollarSign
        style={{ verticalAlign: "top" }}
        key={y + brandPrice + 1}
        color="#E0E0E0"
        size={16}
        strokeWidth={1}
      />
    );
  }
  return dollarSigns;
}
