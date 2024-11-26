import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import GuestScreen from './screens/GuestScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
                        screenOptions={ {
                          headerTintColor:"#fff",
                          headerStyle:{
                          backgroundColor: "#191970",}}}>
        <Stack.Screen name="Welcome" 
                      component={WelcomeScreen} 
                      options={{
                        headerTitle: () => (
                        <View style={styles.headerContainer}>
                          <Image
                            style={styles.logo}
                            source={require('./screens/Limat.png')}
                          />
                          <Text style={styles.headerText}>LIMAT TECHNOLOGY SOLUTIONS</Text>
                        </View>
                        ),
                         // headerTitleAlign: 'center',
                       }} 
        />
        <Stack.Screen name="Guest" component={GuestScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  logo: {
    width: 40, 
    height: 40,
    marginRight: 10, 
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fff',
  },
});

export default App;
