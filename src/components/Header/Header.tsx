import { useFilter } from "@/context/useFilter";
import { Form, Input } from "antd";

const { Search } = Input;

function Header() {
  const { setFiltered, search, setSearch } = useFilter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setFiltered(false);
  };

  return (
    <div className="header">
      <p className="header-title text-red-500">Country</p>
      <Form className="header-form">
        <Search
          className="search text-red"
          placeholder="County Name"
          allowClear
          size="large"
          value={search}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
}

export default Header;
