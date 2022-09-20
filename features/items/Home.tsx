import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {logout} from '../user/userSlice';
import {
  articleStatus,
  CategoryType,
  fetchArticles,
} from './dataSlice';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemList from './ItemList';
import DetailPage from './DetailPage';
import Categories from './Categories';
import {Alert, Button} from 'react-native';
import {useTranslation} from 'react-i18next';
import { changeLanguage } from '../../i18n';

export type RootStackParamList = {
  Categories: undefined;
  ItemList: {category: CategoryType};
  DetailPage: {category: CategoryType; itemID: string; itemName: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Home() {
  const dispatch = useAppDispatch();
  const articlesFetchingStatus = useAppSelector(articleStatus);
  const {t, i18n} = useTranslation();
  useEffect(() => {
    if (articlesFetchingStatus === 'idle') {
      dispatch(fetchArticles());
    }
  }, [articlesFetchingStatus, dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerRight: () => (
            <Button
              onPress={() => changeLanguage()}
              title={t('Change Language') === 'English' ? 'Eng' : t('Change Language')}
            />
          ),
        }}>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            title: t('Categories'),
            headerLeft: () => (
              <Button
                onPress={() => dispatch(logout())}
                title={t('Logout Button')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ItemList"
          component={ItemList}
          options={({route}) => ({
            title: t(route.params.category, {ns: 'data'}),
          })}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={({route}) => ({title: t(route.params.itemName, {ns: 'data'})})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
