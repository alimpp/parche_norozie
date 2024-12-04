import { createPrice } from "@/utils/number";

export const createPricingListModel = (list: any) => {
  let result: any = [];

  list.forEach((element: any) => {
    let images = [];
    let tagList = [];
    let attributeList = [];
    let propertiyList = [];
    for (let key of element.media) {
      images.push(
        `https://parche-go.liara.run/api/v1/download/${key.filename}`
      );
    }
    for (let key of element.tags) {
      tagList.push(key.tag);
    }
    for (let item of element.attributes) {
      let attr = { key: item.key, value: item.value };
      attributeList.push(attr);
    }
    for (let key of element.properties) {
      for (let item of key.values) {
        let prop = { id: key.ID, value_ids: item.ID };
        propertiyList.push(prop);
      }
    }
    result.push({
      ...element,
      ID: element.ID,
      price: createPrice(element.price),
      price_after_discount: createPrice(element.price_after_discount),
      category_id: createPrice(element.category.ID),
      media: images,
      tags: tagList,
      attributes: attributeList,
      properties: propertiyList,
    });
  });

  return result;
};
