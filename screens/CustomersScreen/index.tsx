import { MaterialBottomTabNavigationConfig, MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs/lib/typescript/src/types';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { TabStackParamList } from '../../navigator/TabNavigator';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from '@rneui/themed/dist/Image';
import { ActivityIndicator } from 'react-native';


export type CustomerScreenNavigationProp = CompositeNavigationProp<MaterialBottomTabNavigationProp<TabStackParamList, 'Customers'>, 
NativeStackNavigationProp<RootStackParamList>>

   
    

const CustomersScreen = () => {
     const tw = useTailwind(); 
    const navigation = useNavigation<CustomerScreenNavigationProp>() ;

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown : false ,
        });
    }, []) ;
    return (
      <ScrollView>
            <Image source={{uri : "https://links.papareact.com/3jc"}}
            containerStyle= {tw("w-full h-100%")}
            PlaceholderContent={<ActivityIndicator/>}/>   
       </ScrollView>
    )
  
}

export default CustomersScreen ;
