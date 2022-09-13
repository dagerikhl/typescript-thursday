const fetch = async (url: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`["${url}", 2, 3]`);
    }, 1000);
  });
};

export default fetch;
