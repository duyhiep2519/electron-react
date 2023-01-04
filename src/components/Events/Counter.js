import { ScheduleOutlined } from "@ant-design/icons";
import { Col, Row, Statistic } from "antd";
import { getBirthdayDeadline } from "./functions";
import "./index.scss";

const { Countdown } = Statistic;

export const Counter = ({ birthday }) => {
  return (
    birthday && (
      <Row>
        <Col>
          <ScheduleOutlined />
        </Col>
        <Col>
          <Countdown
            title="Coming soon"
            value={getBirthdayDeadline(birthday)}
            format="D ngày H giờ "
            className="counter"
          />
        </Col>
      </Row>
    )
  );
};
