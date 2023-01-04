export const getBirthdayDeadline = (birthday) => {
  const now = new Date();
  const birthdayDate = new Date(birthday);
  const year = now.getFullYear();
  birthdayDate.setFullYear(year);
  const deadline = birthdayDate.getTime() - now.getTime();
  return deadline + now.getTime();
};
