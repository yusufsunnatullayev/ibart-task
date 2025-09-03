export interface IRegister {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  agreeTerms: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}
