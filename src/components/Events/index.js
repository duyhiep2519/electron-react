import { BirthDayCard } from "./BirthdayCard";
import { Births } from "./consts";
import { Col, Row } from "antd";

export const Events = () => {
  return (
    <>
      <Row className="gutter-row" gutter={16}>
        <Col span={12}>
          <BirthDayCard birthday={Births.girl} />
        </Col>
        <Col span={12}>
          <BirthDayCard birthday={Births.boy} />
        </Col>
      </Row>
    </>
  );
};
