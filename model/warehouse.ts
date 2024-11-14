export const createWarehouseListModel = (list: any) => {
  let result: any = [];
  list.forEach((element: any) => {
    result.push({
      ID: element.ID,
      ProductID: element.ProductID,
      stock: element.stock,
      name: element.Product.name,
      action: "-",
    });
  });
  return result;
};
