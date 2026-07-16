import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/types';

import ScreenContainer from '../../../components/common/ScreenContainer';
import Text from '../../../components/common/Text';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import { useAppDispatch } from '../../../hooks/redux';
import { loginSuccess } from '../../../redux/slices/authSlice';
import { Storage } from '../../../storage/storage';
import { login } from '../../../api/authApi';
import { Alert } from 'react-native';

import styles from './Login.styles';
import Colors from '../../../theme/colors';

const Login = () => {
  const navigation =useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const dispatch = useAppDispatch();
  const passwordRef = useRef<TextInput>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validate = (): boolean => {
    const newErrors = {
      email: '',
      password: '',
    };

    let isValid = true;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email';
        isValid = false;
      }
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleLogin = async () => {
    if (!validate()) {
      return;
    }

    try {
      setLoading(true);

      const response = await login({
        email,
        password,
      });

      await Storage.setToken(response.token);

      dispatch(
        loginSuccess({
          token: response.token,
        }),
      );
    } catch (error: any) {
      Alert.alert(
        'Login Failed',
        error?.response?.data?.msg ?? 'Unable to login',
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text size="xxl" weight="bold">
            Welcome Back 👋
          </Text>

          <Text size="md" color={Colors.textSecondary} style={styles.subtitle}>
            Sign in to continue managing your expenses.
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={text => {
              setEmail(text);

              if (errors.email) {
                setErrors(prev => ({
                  ...prev,
                  email: '',
                }));
              }
            }}
            error={errors.email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />

          <Input
            ref={passwordRef}
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={text => {
              setPassword(text);

              if (errors.password) {
                setErrors(prev => ({
                  ...prev,
                  password: '',
                }));
              }
            }}
            error={errors.password}
            secureTextEntry
            secureToggle
            autoCapitalize="none"
            returnKeyType="done"
          />

          <TouchableOpacity activeOpacity={0.7} style={styles.forgotButton}>
            <Text size="sm" weight="medium" color={Colors.primary}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <Button title="Sign In" loading={loading} onPress={handleLogin} />
        </View>

        <View style={styles.footer}>
          <Text color={Colors.textSecondary}>Don't have an account?</Text>

          <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Register')}>
            <Text weight="semibold" color={Colors.primary}>
              {' '}
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Login;
