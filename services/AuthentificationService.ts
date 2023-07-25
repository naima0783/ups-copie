import LoginRequest from "../models/security/loginRequest";
import LoginResponse from "../models/security/loginResponse";

class AuthentificationService {
  static getRole(): any {
    this.isAuthenticated();
    return JSON.stringify(localStorage.getItem("user")) ;
  }

  static getJwt(): any {
    this.isAuthenticated();
    return localStorage.getItem("jwt");
  }

  static async call(login: LoginRequest): Promise<LoginResponse | undefined> {
    const response = await fetch("http://localhost:8080/auth/signin", {
      method: "POST",
      body: JSON.stringify(login),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      return await response.json();
    }
  }

  static async login(username: string, password: string): Promise<boolean> {
    await this.call(new LoginRequest(username, password)).then((response) => {
      if (response !== undefined) {
        localStorage.setItem("jwt", response.jwt);
        localStorage.setItem("expiration", response.expiration);
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("reloaded", "false");
      }
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuthenticated());
      }, 1000);
    });
  }

  static isAuthenticated(): boolean {
    const jwt = localStorage.getItem("jwt");
    const expiration = localStorage.getItem("expiration");

    if (
      expiration !== null &&
      Date.parse(expiration) > Date.now() &&
      jwt != null
    ) {
      return jwt !== undefined;
    } else {
      localStorage.removeItem("jwt");
      localStorage.removeItem("expiration");
      localStorage.removeItem("user");

      if (localStorage.getItem("reloaded") !== "true") {
        window.location.reload();
        localStorage.setItem("reloaded", "true");
      }

      return false;
    }
  }
}

export default AuthentificationService;