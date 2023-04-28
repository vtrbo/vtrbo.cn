import dayjs from "dayjs";
function getYear(date) {
  return dayjs(date).year();
}
function getDate(date) {
  const tempDate = dayjs(date);
  if (tempDate.year() === dayjs().year())
    return tempDate.format("MMM D");
  return tempDate.format("MMM D, YYYY");
}
export {
  getDate as a,
  getYear as g
};
