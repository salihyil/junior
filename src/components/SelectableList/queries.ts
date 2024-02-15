import { gql } from "@/__generated__/gql";

export const GET_ALL_CONTRIES = gql(`
query getCountries($search: String, $currency: String) {
  countries(filter: {name: {regex: $search}, currency: {regex: $currency}}) {
    code
    capital
    name
    code
    currency
    name
    native
    phone
  }
}
`);
