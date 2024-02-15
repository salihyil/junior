export interface FilterContextType {
  selectedItem: string | null;
  setSelectedItem: (selected: string | null) => void;
  filtered: boolean;
  setFiltered: (filtered: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

export const defaultValues: FilterContextType = {
  selectedItem: "",
  setSelectedItem: () => {},
  filtered: false,
  setFiltered: () => {},
  search: "",
  setSearch: () => {},
  currency: "",
  setCurrency: () => {},
};
