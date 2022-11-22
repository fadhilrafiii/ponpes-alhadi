export const redirectServerTo = (ctx, to) => {
  const { res } = ctx;
  return res
    ?.writeHead(302, {
      Location: process.env.NEXT_URL + to,
    })
    ?.end();
};
