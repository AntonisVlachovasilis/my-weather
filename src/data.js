const data = [
  {
    dt_txt: "2023-05-03 10:00:00",
    wind: "high",
  },
  {
    dt_txt: "2023-05-03 18:00:00",
    wind: "low",
  },
  {
    dt_txt: "2023-05-04 12:00:00",
    wind: "high",
  },
  {
    dt_txt: "2023-05-04 18:00:00",
    wind: "high",
  },
  {
    dt_txt: "2023-05-05 00:00:00",
    wind: "low",
  },
  {
    dt_txt: "2023-05-05 06:00:00",
    wind: "low",
  },
  {
    dt_txt: "2023-05-06 00:00:00",
    wind: "high",
  },
  {
    dt_txt: "2023-05-06 06:00:00",
    wind: "high",
  },
];

const newData = data.reduce((acc, obj) => {
  const check = acc.some((unObj) => {
    console.log(unObj.dt_txt.slice(0, 10) === obj.dt_txt.slice(0, 10), "text");
    return unObj.dt_txt.slice(0, 10) === obj.dt_txt.slice(0, 10);
  });
  if (check) {
    acc.push(obj);
  }
  return acc;
}, []);

console.log(newData);
