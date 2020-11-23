export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatDate = (stringDate) => {
  const months = [`January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`];

  const splittedDate = stringDate.split(`-`);

  return `${months[splittedDate[1] - 1]} ${splittedDate[0]}`;
};

const compareItems = (a, b) => {
  switch (true) {
    case (a > b):
      return 1;
    case (a === b):
      return 0;
    case (a < b):
      return -1;
    default:
      return 0;
  }
};

export const compareItemsPrice = (ElementA, ElementB) => {
  return compareItems(ElementA.price, ElementB.price);
};

export const compareItemRating = (ElementA, ElementB) => {
  return ElementA.rating - ElementB.rating;
};
