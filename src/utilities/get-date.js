const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const getDate = (date) => {
  const jobDate = new Date(date);
  return `${
    months[jobDate.getMonth()]
  } ${jobDate.getDate()}, ${jobDate.getFullYear()}`;
};

export default getDate;
