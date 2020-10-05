export const filledArray = (count: number, filler: (index: number) => any) => {
  const arr = [...new Array(count)];
  return arr.map((x, i) => filler(i));
};

export const loremIpsum = (size: "sm" | "md" | "lg" | "xl" = "md") => {
  const computeSize = {
    sm: 100,
    md: 200,
    lg: 400,
    xl: 860,
  };
};
