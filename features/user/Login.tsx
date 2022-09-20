import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {useAppDispatch} from '../../app/hooks';
import {styles} from '../../stylesheet';

import {login} from './userSlice';
import {useTranslation} from 'react-i18next';
import { changeLanguage } from '../../i18n';

const Login = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch();
  const {t, i18n} = useTranslation();
  

  function submitLoginForm() {
    if (!username || !password) {
      Alert.alert('Username or Password is empty');
    } else {
      dispatch(login());
    }
  }
  return (
    <SafeAreaView style={styles.loginContainer}>
      <Text style={styles.title}>{t('Login Page')}</Text>
      <TextInput
        placeholder={t('Username')}
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder={t('Password')}
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title={t('Login Button')} onPress={() => submitLoginForm()} />
      <Button title={t('Change Language')} onPress={() => changeLanguage()} />
    </SafeAreaView>
  );
};

export default Login;
