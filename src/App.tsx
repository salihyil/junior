import { Col, Row } from "antd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SelectableList from "./components/SelectableList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Row justify="center">
        <Col lg={3} md={0} sm={0} xs={0}>
          <Sidebar />
        </Col>
        <Col span={12} offset={1}>
          <Row align="middle" justify="center">
            <SelectableList />
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
export default App;
