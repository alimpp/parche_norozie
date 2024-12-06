import { createPrice } from "@/utils/number";

export const createWebProductListModel = (list: any, favoriteListId: any) => {
  let result: any = [];
  list.forEach((element: any) => {
    let images = [];
    let inFavoriteList = false;
    for (let key of element.media) {
      images.push(
        `https://parche-go.liara.run/api/v1/download/${key.filename}`
      );
    }
    for (let key of favoriteListId) {
      if (element.ID == key.product_id) {
        inFavoriteList = true;
      }
    }
    result.push({
      ...element,
      inFavoriteList,
      images,
      mainImage: `https://parche-go.liara.run/api/v1/download/${element.media[0].filename}`,
      price: createPrice(element.price),
      price_after_discount: createPrice(element.price_after_discount),
    });
  });
  return result;
};

export const createWebProductModel = (product: any, favoriteListId: any) => {
  let images: any = [];
  let inFavoriteList = false;
  for (let key of favoriteListId) {
    if (product.ID == key.product_id) {
      inFavoriteList = true;
    }
  }
  product.media.forEach((file: any) => {
    images.push(`https://parche-go.liara.run/api/v1/download/${file.filename}`);
  });
  return {
    ...product,
    inFavoriteList,
    images,
    mainImage: `https://parche-go.liara.run/api/v1/download/${product.media[0].filename}`,
    price: createPrice(product.price),
    price_after_discount: createPrice(product.price_after_discount),
  };
};
