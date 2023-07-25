import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text, View } from 'react-native'
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Main: undefined; // add more params as needed
  MyModal : {userId : string, name : string};
  Order :{order: any}
}

  const RootStack = createNativeStackNavigator();

const RootNavigation =() => {

    return (
      <RootStack.Navigator>
          <RootStack.Group>
              <RootStack.Screen name='Main' component={TabNavigator}/>
          </RootStack.Group>
      </RootStack.Navigator>
    )
  }


export default RootNavigation ;
