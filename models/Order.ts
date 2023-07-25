class Order {

     private createdAt: Date;

  private shippingCost: String;
  private carrier: String;
  private Address: String;
  private City: String;
  private Lat: number;
  private Lng: number;

  constructor(
    createdAt: Date,
    shippingCost: String,
    carrier: String,
    Address: String,
    City: String,
    Lat: number,
    Lng: number
  ) 
  {
    this.createdAt= createdAt ;
    this.shippingCost = shippingCost ;
    this.Address= Address ;
    this.City= City ;
    this.Lat= Lat;
    this.Lng= Lng ;
    this.carrier = carrier ;
  }
}
export default Order ;