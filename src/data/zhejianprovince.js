import list from "./china";

const provinceList = list
  .filter(({ level, parent }) => level === "city" && parent === 330000)
  .map((item) => Object.assign({}, item, { value: Math.random() * 5000 }));

console.log(provinceList);

export default provinceList;
