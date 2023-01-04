import { BirthDayCard } from "./BirthdayCard";
import { Births } from "./consts";

export const Events = () => {
  return (
    <>
      <BirthDayCard birthday={Births.girl} />
      <BirthDayCard birthday={Births.boy} />
    </>
  );
};
