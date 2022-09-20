import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useAppSelector } from '../../app/hooks';
import { styles } from '../../stylesheet';
import { articleData } from './dataSlice';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from './Home';
import {useTranslation} from 'react-i18next';

type Props = NativeStackScreenProps<RootStackParamList, 'ItemList'>;


export default function ItemList({route, navigation}: Props) {
  const {category} = route.params;
  const data = useAppSelector(articleData);
  const {t, i18n} = useTranslation();

  if (!data) return null;
  return (
    <View style={styles.container}>
      <FlatList
        data={data[category].items}
        renderItem={({item}) => (
          <Text
            style={styles.item}
            onPress={() =>
              navigation.navigate('DetailPage', {
                category,
                itemName: item.name_en,
                itemID: item.id,
              })
            }>
            {t(item.name_en, {ns: 'data'})}
          </Text>
        )}
      />
    </View>
  );
}
