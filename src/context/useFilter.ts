import { useContext } from "react";
import { FilterContext } from "./main";

export const useFilter = () => {
  return useContext(FilterContext);
};
