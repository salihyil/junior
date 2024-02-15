import { defaultValues } from "@/types";
import { createContext, useState } from "react";

export const FilterContext = createContext(defaultValues);

export const FilterProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [filtered, setFiltered] = useState(true);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("");

  const values = {
    filtered,
    setFiltered,
    selectedItem,
    setSelectedItem,
    search,
    setSearch,
    currency,
    setCurrency,
  };
  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>;
};
