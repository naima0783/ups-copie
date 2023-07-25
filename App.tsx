import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
   import utilities from './tailwind.json';
import CustomersScreen from './screens/CustomersScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://moundou.stepzen.net/api/gone-kiwi/__graphql',
  cache: new InMemoryCache(),
});


export default function App() {

  
  return (
    

        //@ts-ignore - Tailwind is missing a type definition
      <TailwindProvider utilities={utilities}>
          <ApolloProvider client={client}>
              <NavigationContainer>
                  <RootNavigator/>      
              </NavigationContainer>
          </ApolloProvider>
      </TailwindProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
