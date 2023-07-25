import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
query GetCustomers{
    GetCustomers{
        value{
            email
            name
        }
        name
    }
}
`;

export const GET_ORDERS = gql`
query GetOrders{
    GetOrders{
        value {
            carrier
            createdAt
            trackingId
            shippingCost
            Adress
            City
            Lng
            Lat
            trackingItems{
                customer_id
                customer{
                    email 
                    name
                }
                items {
                    item_id
                    name
                    price
                    quantity
                }
            }
        }
    }
}
`;
