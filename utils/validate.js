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

export const ValidateName = (param) => {
  if (param.length > 2 && param.length < 20) {
    return {
      state: false,
      message: "",
    };
  } else {
    return { state: true, message: "نام خود را وارد کنید" };
  }
};

export const ValidateLastName = (param) => {
  if (param.length > 2 && param.length < 20) {
    return {
      state: false,
      message: "",
    };
  } else {
    return { state: true, message: "نام خانوادگی خود را وارد کنید" };
  }
};

export const ValidateJob = (param) => {
  if (param.length > 2 && param.length < 20) {
    return {
      state: false,
      message: "",
    };
  } else {
    return { state: true, message: "شغل خود را وارد کنید" };
  }
};

export const ValidateCardNumber = (param) => {
  if (isNaN(param)) {
    return { state: true, message: " کد ملی خود را وارد کنید" };
  } else if (param == "") {
    return { state: true, message: "کد ملی وارده اشتباه است" };
  } else if (param.length < 10) {
    return { state: true, message: "نباید کمتر از ۱۰ عدد باشد" };
  } else {
    return {
      state: false,
      message: "",
    };
  }
};

export const validateEmail = (param) => {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(param)) {
    return {
      state: false,
      message: "",
    };
  } else {
    return {
      state: true,
      message: "ایمیل اشتباه است",
    };
  }
};
