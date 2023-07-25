import { MaterialBottomTabNavigationConfig, MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs/lib/typescript/src/types';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { ScrollView , Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from '@rneui/themed/dist/Image';
import { ActivityIndicator } from 'react-native';
import { Input } from '@rneui/themed';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/queries';
import CustomerCard from '../components/CustomerCard';


export type CustomerScreenNavigationProp = CompositeNavigationProp<MaterialBottomTabNavigationProp<TabStackParamList, 'Customers'>, 
NativeStackNavigationProp<RootStackParamList>>

   
    

const CustomersScreen = () => {
    const tw = useTailwind(); 
    const navigation = useNavigation<CustomerScreenNavigationProp>() ;
    const [input, setInput] = useState<string>('') ;
    const {loading, error, data} = useQuery(GET_CUSTOMERS);

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown : false ,
        });
    }, []) ;

    return (
      <ScrollView style= {{backgroundColor : "#59C1CC"}}>
            <Image source={{uri : "https://links.papareact.com/3jc"}}
            style= {{width: 400, height: 200}}
            //containerStyle ={tw('w-full h-200')}
            PlaceholderContent={<ActivityIndicator/>}/>   

            <Input placeholder="Search by Customer" value={input} onChangeText={setInput} 
            style={{backgroundColor:"white", borderRadius: 10, paddingBottom : 0, paddingTop: 5, paddingHorizontal: 10, marginTop: 5}}/>

            <Text>{data.getCustomers.length } </Text>

            {data?.getCustomers.map(({name: ID, value:{email,name}}: CustomerResponse)  => (
                <CustomerCard key={ID} email={email} name={name}  userId={ID} />
            ))}
            
       </ScrollView>
    )
  
}

export default CustomersScreen ;
