export const cleanObject = (obj) => {
  const newObj = { ...obj };

  Object.keys(obj).forEach((key) => {
    if (!newObj[key] && newObj[key] !== 0) delete newObj[key];
  });

  return newObj;
};
