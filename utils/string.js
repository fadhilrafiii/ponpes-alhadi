export const isEmail = (string) => {
  console.log(string);
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(string);
};