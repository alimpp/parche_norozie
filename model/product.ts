import { createPrice } from "@/utils/number";

export const createProductListModel = (list: any) => {
  let result: any = [];
  list.forEach((element: any) => {
    let images = [];
    for (let key of element.media) {
      images.push(
        `https://parche-go.liara.run/api/v1/download/${key.filename}`
      );
    }
    result.push({ ...element, images, price: createPrice(element.price) });
  });
  return result;
};

export const createProductModel = (product: any) => {
  console.log(product);
};
