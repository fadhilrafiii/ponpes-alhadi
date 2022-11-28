export const convertBytes = (bits, unit = 'KB') => {
  const bytesToUnitRatio = {
    B: 0,
    KB: 1,
    MB: 2,
    GB: 3,
  };

  const divisor = Math.pow(1024, bytesToUnitRatio[unit]);

  return (bits / divisor).toFixed(2);
};
