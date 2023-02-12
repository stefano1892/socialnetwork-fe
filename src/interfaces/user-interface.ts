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
  surname: string,
  email: string,
  password: string,
  skillSet: string[],
  birthDate: string,
  phoneNumber: number
}