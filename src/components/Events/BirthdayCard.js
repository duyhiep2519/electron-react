import { Avatar, Card } from "antd";
import heart from "assets/images/heart.png";
import { Counter } from "./Counter";
const { Meta } = Card;
export const BirthDayCard = ({ birthday }) => (
  <Card
    style={{
      width: 300,
    }}
    cover={<img alt="avatar" src={birthday.avatar} />}
  >
    <Meta avatar={<Avatar src={heart} />} title={birthday.name} />
    <Counter birthday={birthday.day} />
  </Card>
);
