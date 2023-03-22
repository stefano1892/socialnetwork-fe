export interface IUserLogin {
  email: string,
  password: string,
}

export interface IUserRegister extends IUserLogin {
  name: string,
  surname: string
}

export interface IUser {
  name: string,
  secondName: string,
  surname: string,
  email: string,
  password: string,
  birthDate: any,
  phoneNumber: string
}

export interface IBaseSettingsUser {
  name: string,
  secondName: string,
  lastName: string,
  email: string,
  birthDate: any,
  phoneNumber: string
}