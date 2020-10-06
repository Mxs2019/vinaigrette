export const filledArray = (count: number, filler?: (index: number) => any) => {
  const arr = [...new Array(count)];
  if (filler) return arr.map((_, i) => filler(i));
  else return arr;
};

// export const loremIpsum = (size: "sm" | "md" | "lg" | "xl" = "md") => {
//   const computeSize = {
//     sm: 100,
//     md: 200,
//     lg: 400,
//     xl: 860,
//   };
// };
