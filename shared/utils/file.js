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

export const s2ab = (s) => {
  let buf = new ArrayBuffer(s.length);
  let view = new Uint8Array(buf);
  for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
};
