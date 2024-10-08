export const TicketMessageDataModel = (messages: any, data: any) => {
  let list: any = [];
  messages.forEach((msg: any) => {
    let itsMe = false;
    const role = localStorage.getItem("role");
    if (msg.role == role) {
      itsMe = true;
    }
    const messageObject = {
      itsMe,
      ...data.user,
      ...msg,
      name: data.user.name ? data.user.name : "بدون نام",
    };
    list.push(messageObject);
  });
  return list;
};
