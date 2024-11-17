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
    result.push({
      ...element,
      images,
      price: createPrice(element.price),
      price_after_discount: createPrice(element.price_after_discount),
    });
  });
  return result;
};

export const createProductModel = (product: any) => {
  let images: any = [];
  product.media.forEach((file: any) => {
    images.push(`https://parche-go.liara.run/api/v1/download/${file.filename}`);
  });
  return {
    ...product,
    images,
    price: createPrice(product.price),
    price_after_discount: createPrice(product.price_after_discount),
  };
};
