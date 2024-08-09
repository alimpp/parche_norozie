export interface ILogin {
  phone: string;
  status: string | number;
}

export interface IOtp {
  otp_token: string;
  phone: string;
  status: string | number;
}
