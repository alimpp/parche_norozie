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
    return { state: true, message: "فقط عدد بصورت لاتین وارد کنید" };
  } else if (param == "") {
    return { state: true, message: "کد ملی خودرا وارد کنید" };
  } else if (param.length < 10) {
    return { state: true, message: "کد نباید کمتر از ۱۰ عدد باشد" };
  } else {
    var yy = 0;
    var yv = parseInt(yv);
    for (let i = 0; i < param.length; i++) {
      yv = param[i] * (param.length - i);
      yy += yv;
    }
    var x = yy % 11;
    if (x === 0) {
      return {
        state: false,
        message: "",
      };
    } else {
      return { state: true, message: "کد ملی اشتباه است" };
    }
    yy = 0;
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

export const validatepostalCode = (param) => {
  if (isNaN(param)) {
    return {
      state: true,
      message: "فقط عدد بصورت لاتین وارد کنید",
    };
  } else if (param == "") {
    return {
      state: true,
      message: "کد پستی خود را وارک کنید",
    };
  } else if (param.length < 10) {
    return {
      state: true,
      message: "کدپستی نباید کمتر از ۱۰ عدد باشد",
    };
  } else if (param.length > 10) {
    return {
      state: true,
      message: "کدپستی نباید بیشتر از ۱۰ عدد باشد",
    };
  } else {
    return {
      state: false,
      message: "",
    };
  }
};

export const ValidateAddress = (param) => {
  if (param == "") {
    return { state: true, message: "آدرس پستی خود را کامل وارد کنید" };
  } else if (param.length < 20) {
    return { state: true, message: "آدرس شما خیلی کوتاه است !!!" };
  } else if (param.length > 120) {
    return { state: true, message: "آدرس شما طولانی است !!!" };
  } else {
    return {
      state: false,
      message: "",
    };
  }
};

export const validateEmpty = (param) => {
  if (param == "") {
    return { state: true, message:"این قسمت نباید خالی باشد" };
  } else {
    return {
      state: false,
      message: "",
    };
  }
};