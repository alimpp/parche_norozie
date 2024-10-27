export const CustomersDataModel = (data: any) => {
  let list: any = [];
  data.forEach((element: any) => {
    const costumer = {
      phone: element.phone,
      name: element.name ? element.name : "---",
      lastname: element.lastname ? element.lastname : "---",
      email: element.email ? element.email : "---",
      id_card_number: element.id_card_number ? element.id_card_number : "---",
      job: element.job ? element.job : "---",
      address: element.addresses ? element.addresses : [],
    };
    list.push(costumer);
  });
  return list;
};
