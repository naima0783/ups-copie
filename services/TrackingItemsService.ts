import AuthentificationService from "./AuthentificationService";

class TrackingItemsService {
    
  static async getAll(): Promise<TrackingItems[]> {
    return fetch("http://localhost:8080/trackingItems/all", {
      headers: { authorization: AuthentificationService.getJwt() },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  

  static async getOne(id: string | undefined): Promise<TrackingItems | undefined> {
    return fetch(`http://localhost:8080/trackingItems/edit/${id}`, {
      headers: { authorization: AuthentificationService.getJwt() },
    })
      .then((TrackingItems) => TrackingItems.json())
      .catch((error) => {
        console.error(error);

        throw error;
      });
  }

  

  
}
export default TrackingItemsService;
