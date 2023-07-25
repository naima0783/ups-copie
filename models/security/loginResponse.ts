import User from "./user";

export default class LoginResponse {
  jwt: string;
  expiration: string;
  user: User;

  constructor(jwt: string, expiration: string, user: User) {
    this.expiration = expiration;
    this.jwt = jwt;
    this.user = user;
  }
}