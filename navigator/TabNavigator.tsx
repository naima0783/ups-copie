import React, { useLayoutEffect } from 'react';
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '@rneui/base/dist/Icon';



export type TabStackParamList = {
  Customers : undefined ;
  Orders : undefined ;
}

    const Tab = createBottomTabNavigator<TabStackParamList>() ;

const TabNavigator = () => {

  const navigation = useNavigation() ;
  
  useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false ,

      });
  }, []) 

    return (
      <Tab.Navigator screenOptions={({route}) =>({
          tabBarActiveTintColor : "#59C1CC" ,
          tabBarInactiveColor : "gray" ,
          tabBarIcon:({focused,color,size}) => {
            if(route.name=== 'Customers'){
              return <Icon  color={ focused ? "#59C1CC" : "gray"}  name='users' type='entypo'/>
            }else if (route.name=='Orders'){
              return <Icon color={ focused ? "#EB6A76" : "gray"} name ="box" type="entypo"/>
            }
          }
      }) }>
        <Tab.Screen name="Customers" component={CustomersScreen}/>
                <Tab.Screen name="Orders" component={OrdersScreen}/>

      </Tab.Navigator> 
    )
  }


export default TabNavigator ;






