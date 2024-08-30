import RESPONSE from "../components/utility/RESPONSE";

export const getList = (page = 1, limit = 10) => {
  const index = page * limit;
  new Promise((resolve) => {
    console.log(index);
    resolve(RESPONSE);
  });
};
