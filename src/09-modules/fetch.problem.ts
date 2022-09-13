// Task: Impl. types for this function
const fetch = async (url): Promise<unknown> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`["${url}", 2, 3]`);
    }, 1000);
  });
};

export default fetch;
