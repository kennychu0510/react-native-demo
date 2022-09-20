import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Alert,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {styles} from '../../stylesheet';
import {
  articleStatus,
  articleData,
  CategoryType,
  fetchArticles,
} from './dataSlice';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './Home';
import {useTranslation} from 'react-i18next';

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>;

export default function Categories({navigation}: Props) {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const articlesFetchingStatus = useAppSelector(articleStatus);
  const data = useAppSelector(articleData);
  const {t, i18n} = useTranslation();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // setTimeout(() => setRefreshing(false), 2000);
    dispatch(fetchArticles());
  }, []);

  useEffect(() => {
    if (data) {
      setCategories(Object.keys(data) as CategoryType[]);
    }
    if (articlesFetchingStatus === 'succeeded') {
      setRefreshing(false);
    }
  }, [articlesFetchingStatus]);

  if (articlesFetchingStatus !== 'succeeded') {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={{ margin: 10, textAlign: 'center' }}>Pull Down to Fetch Data</Text>
      </ScrollView>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item: category}) => (
          <Text
            style={styles.item}
            onPress={() => navigation.navigate('ItemList', {category})}>
            {t(category, {ns: 'data'})}
          </Text>
        )}
      />
    </View>
  );
}
