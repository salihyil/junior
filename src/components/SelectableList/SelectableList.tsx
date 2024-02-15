import { GET_ALL_CONTRIES } from "@/components/SelectableList/queries";
import { useFilter } from "@/context/useFilter";
import { useQuery } from "@apollo/client";
import { Card, List, Spin } from "antd";
import React, { useEffect } from "react";

const SelectableList: React.FC = () => {
  const { selectedItem, setSelectedItem, search, currency, setFiltered } = useFilter();
  const { loading, data, error } = useQuery(GET_ALL_CONTRIES, {
    variables: {
      search,
      currency,
    },
  });

  useEffect(() => {
    if (data) {
      const countries = data.countries.map((country) => country.name);
      const itemToSelect = countries.length >= 10 ? countries[9] : countries[countries.length - 1];
      setSelectedItem(itemToSelect);
    }
  }, [loading, data, setSelectedItem]);

  const handleItemClick = (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);
    setFiltered(false);
  };

  if (loading) return <Spin size="large" />;
  if (error) return `Error! ${error.message}`;

  return (
    <List
      grid={{ column: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
      className="w-full"
      size="large"
      dataSource={data?.countries}
      renderItem={(country, index) => (
        <List.Item
          className={`rounded cursor-pointer m-4 text-center ${
            selectedItem === country.name ? "bg-purple-heart-400" : "bg-purple-heart-100"
          }`}
          onClick={() => handleItemClick(country.name)}>
          <Card>
            {index + 1}-{country.name}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default SelectableList;
