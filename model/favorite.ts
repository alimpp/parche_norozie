export const favoriteModel = (idList: any, productList: any) => {
  let result: any = [];

  for (let id of idList) {
    for (let item of productList) {
      if (item.ID == id.product_id) {
        result.push(item);
      }
    }
  }
  return result;
};
