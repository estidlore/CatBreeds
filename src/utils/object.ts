const groupByKeys = (data: Record<string, unknown>[]):
  Record<string, unknown[]> => {
  const res: Record<string, unknown[]> = {};

  data.forEach((obj) => {
    Object.entries(obj).forEach(([key, val]) => {
      if (!Object.prototype.hasOwnProperty.call(res, key)) {
        res[key] = [];
      }
      res[key].push(val);
    });
  });

  return res;
};

export { groupByKeys };
