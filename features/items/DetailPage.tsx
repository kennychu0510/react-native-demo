import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './Home';
import {useAppSelector} from '../../app/hooks';
import {articleData} from './dataSlice';
import {useTranslation} from 'react-i18next';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailPage'>;

export default function DetailPage({route, navigation}: Props) {
  const data = useAppSelector(articleData);
  if (!data) return null;
  const {itemName: name, category, itemID} = route.params;
  const itemDetails = data[category].items.find(item => item.id === itemID);
  if (!itemDetails) return null;

  const {image, description_en, code, id} = itemDetails;
  const {t, i18n} = useTranslation();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, padding: 20}}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: image,
        }}></Image>
      <Text>
        <Text style={styles.subHeader}>ID: </Text> {id}
      </Text>
      <Text>
        <Text style={styles.subHeader}>Code: </Text> {code}
      </Text>
      <Text>
        <Text style={styles.subHeader}>Description: </Text>
        {t(description_en, {ns: 'data'})}
      </Text>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    margin: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subHeader: {
    fontWeight: 'bold',
  }
});
