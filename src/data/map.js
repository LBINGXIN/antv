import data from "./china";

const list = data
  .filter(({ level }) => level === "province")
  .map((item) => Object.assign({}, item, { value: Math.random() * 5000 }));

export default list;
