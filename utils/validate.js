export const ValidatePhoneNumber = (phoneNumber) => {
  const startWith = phoneNumber.slice(0, 2);
  const phoneNumberLength = phoneNumber.length;
  if ((startWith == "09", phoneNumberLength == 11)) {
    return {
      state: false,
      message: "",
    };
  } else {
    return {
      state: true,
      message: "شماره تلفن وارد شده اشتباه است",
    };
  }
};
