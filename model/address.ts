export const addressDataModel = (data: any) => {
  let list: any = [];
  data.forEach((element: any) => {
    const address = {
      address: element.address ? element.address : String,
      name: element.name ? element.name : String,
      postal_code: element.postal_code ? element.postal_code : String,
      uuid: element.uuid ? element.uuid : String,
    };
    list.push(address);
  });
  return list;
};
