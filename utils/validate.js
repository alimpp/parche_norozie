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

export const ValidateNameAndLastName = (param) => {
  if (param.length > 2 && param.length < 20) {
    return {
      state: false,
      message: "",
    };
  } else {
    return { state: true, message: "" };
  }
};

export const ValidateCardNumber = (param) => {
  if (isNaN(param)) {
    console.log("please enter a number !");
  } else if (param == "") {
    console.log("please write a code !");
  } else if (param.length < 10) {
    console.log("your entered code is less than 10!");
  } else {
    let yy = 0;
    let yv = parseInt(yv);
    for (let i = 0; i < param.length; i++) {
      yv = param[i] * (param.length - i);
      yy += yv;
    }
    let x = yy % 11;
    if (x === 0) {
      console.log("your code is valid !");
    } else {
      console.log("your code is invalid !");
    }
    yy = 0;
  }
};
