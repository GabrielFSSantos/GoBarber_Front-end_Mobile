import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';


const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator 
    screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#312E38'}}} 
    // initialRouteName="SignUp"
  >

    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;