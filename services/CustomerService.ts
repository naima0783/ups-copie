import AuthentificationService from "./AuthentificationService";

class ClientService {





  /**
  static async getAll(): Promise<Client[]> {
    return fetch("http://localhost:8080/client/all", {
      headers: { authorization: AuthentificationService.getJwt() },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  static getStartWith = (name: string): Promise<Client[]> => {
    return fetch(`http://localhost:8080/client/search?q=${name}`, {
      headers: { authorization: AuthentificationService.getJwt() },
    })
      .then((client) => client.json())
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  static async getOne(id: string | undefined): Promise<Client | undefined> {
    return fetch(`http://localhost:8080/client/edit/${id}`, {
      headers: { authorization: AuthentificationService.getJwt() },
    })
      .then((client) => client.json())
      .catch((error) => {
        console.error(error);

        throw error;
      });
  }

  static async save(client: Client): Promise<boolean> {
    return fetch(`http://localhost:8080/client/edit/${client.id}`, {
      method: "POST",

      body: JSON.stringify(client),
      headers: {
        authorization: AuthentificationService.getJwt(),
        "Content-Type": "application/json",
      },
    })
      .then((OK) => OK.json())
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  static async delete(id: string | undefined): Promise<boolean> {
    return fetch(`http://localhost:8080/client/edit/${id}`, {
      method: "DELETE",

      headers: {
        authorization: AuthentificationService.getJwt(),
        "Content-Type": "application/json",
      },
    })
      .then((ok) => ok.status === 200)
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }*/



}
export default ClientService;
