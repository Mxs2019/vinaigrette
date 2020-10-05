export const filledArray = (count: number, filler: (index: number) => any) => {
  const arr = [...new Array(count)];
  return arr.map((x, i) => filler(i));
};
