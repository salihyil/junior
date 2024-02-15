import { useFilter } from "@/context/useFilter";
import { Affix, Button, Divider, Radio, RadioChangeEvent, Row, Space } from "antd";

function Sidebar() {
  const { filtered, setFiltered, setSearch, setSelectedItem, currency, setCurrency } = useFilter();

  const onChangeCurrency = (e: RadioChangeEvent) => {
    setCurrency(e.target.value);
    setFiltered(false);
  };

  const clearFilters = () => {
    setSearch("");
    setFiltered(true);
    setSelectedItem("");
    setCurrency("");
  };

  return (
    <Affix offsetTop={10}>
      <div>
        <h1>Filters</h1>
        <Button disabled={filtered} type="text" size="small" onClick={clearFilters}>
          Clear Filters
        </Button>
        <Divider />
        <h4 className="text-purple-heart-500 font-bold">CURRENCY</h4>
        <Row>
          <Radio.Group onChange={onChangeCurrency} value={currency}>
            <Space direction="vertical">
              <Radio value={"USD"}>USD</Radio>
              <Radio value={"EUR"}>EUR</Radio>
              <Radio value={"LYD"}>LYD</Radio>
              <Radio value={"MAD"}>MAD</Radio>
              <Radio value={"TR"}>TR</Radio>
            </Space>
          </Radio.Group>
        </Row>
      </div>
    </Affix>
  );
}

export default Sidebar;
