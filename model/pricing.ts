import { createPrice, createNumber } from "@/utils/number";

export const createPricingListModel = (list: any) => {
  let result: any = [];

  list.forEach((element: any) => {
    result.push({
      ...element,
      price: createPrice(element.price),
      price_after_discount: createPrice(element.price_after_discount),
      category_id: createPrice(element.category.ID),
    });
  });
  return result;
};

export const sendPricingModel = (element: any) => {
  let images = [];
  let tagList = [];
  let attributeList = [];
  let propertiyList = [];
  let priced = createNumber(element.price);
  let discounted = createNumber(element.discount);
  let price_after_discounted = createNumber(element.price_after_discount);
  let category_ided = Number(element.category_id);
  let named = element.name;
  let descriptioned = element.description;
  for (let key of element.media) {
    images.push(key.filename);
  }
  for (let key of element.tags) {
    tagList.push(key.tag);
  }
  for (let item of element.attributes) {
    let attr = { key: item.key, value: item.value };
    attributeList.push(attr);
  }
  for (let key of element.properties) {
    let value_id = [];
    for (let item of key.values) {
      value_id.push(item.ID);
    }
    let prop = { id: key.ID, value_ids: value_id };
    propertiyList.push(prop);
  }
  let result = {
    price: priced,
    discount: discounted,
    price_after_discount: price_after_discounted,
    media: images,
    tags: tagList,
    attributes: attributeList,
    properties: propertiyList,
    category_id: category_ided,
    name: named,
    description: descriptioned,
  };
  return result;
};
