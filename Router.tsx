import React from 'react';
import {useAppSelector} from './app/hooks';
import {loginStatus} from './features/user/userSlice';
import Home from './features/items/Home';
import Login from './features/user/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Router() {
  const isLoggedIn = useAppSelector(loginStatus);
  const Stack = createNativeStackNavigator();

  return <>{isLoggedIn ? <Home /> : <Login />}</>;
}
