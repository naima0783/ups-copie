import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { CustomerScreenNavigationProp } from '../screens/CustomersScreen';
import useCustomerOrders from '../hooks/useCustomerOrder';
import { Card } from '@rneui/themed';


type Props ={
    userId: string ;
    name: string;
    email: string;
}

const CustomerCard = ({userId,name,email} : Props) => {

    const {loading, error, orders} = useCustomerOrders(userId) ;

    const tw =  useTailwind() ;
    const navigation = useNavigation<CustomerScreenNavigationProp>() ;
    return (
      <TouchableOpacity>
        <Card containerStyle={tw("p-5 rounded-lg ")}>
            <View>
                <View>
                    <Text>{name}
                    </Text>

                    <Text>ID: {userId}
                    </Text>
                </View>
            </View>
        </Card>      
    </TouchableOpacity>
    )
  }
export default CustomerCard ;
   
