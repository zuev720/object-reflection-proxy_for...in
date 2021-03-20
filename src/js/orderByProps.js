export default function orderByProps(obj, orderSort) {
  if (!(obj) || (typeof obj !== 'object')) {
    return;
  }
  const arrSort = [];
  const arr = [];
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop)) {
      if (orderSort.includes(prop)) {
        arrSort.push({
          key: prop,
          value: obj[prop],
        });
      } else {
        arr.push({
          key: prop,
          value: obj[prop],
        });
      }
    }
  }
  arr.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });
  // eslint-disable-next-line consistent-return
  return [...arrSort, ...arr];
}
