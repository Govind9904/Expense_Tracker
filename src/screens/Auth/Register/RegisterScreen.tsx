import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/types';

import ScreenContainer from '../../../components/common/ScreenContainer';
import Text from '../../../components/common/Text';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';

import styles from './Register.styles';
import Colors from '../../../theme/colors';
import { Alert } from 'react-native';
import { register } from '../../../api/authApi';

const Register = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = (): boolean => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    let isValid = true;

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

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

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required';

      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';

      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleRegister = async () => {
    if (!validate()) {
      return;
    }

    try {
      setLoading(true);

      const response = await register({
        first_name: firstName,

        last_name: lastName,

        email,

        password,

        confirm_password: confirmPassword,
      });

      Alert.alert('Success', response.message, [
        {
          text: 'Continue',
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ]);

      // Navigate to Login screen next step
    } catch (error: any) {
      Alert.alert(
        'Registration Failed',
        error?.response?.data?.message ?? 'Something went wrong',
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
            Create Account
          </Text>

          <Text size="md" color={Colors.textSecondary} style={styles.subtitle}>
            Start tracking your expenses today.
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            label="First Name"
            placeholder="Enter first name"
            value={firstName}
            returnKeyType="next"
            onSubmitEditing={() => lastNameRef.current?.focus()}
            error={errors.firstName}
            onChangeText={text => {
              setFirstName(text);

              if (errors.firstName) {
                setErrors(prev => ({
                  ...prev,
                  firstName: '',
                }));
              }
            }}
          />

          <Input
            ref={lastNameRef}
            label="Last Name"
            placeholder="Enter last name"
            value={lastName}
            error={errors.lastName}
            onChangeText={text => {
              setLastName(text);

              if (errors.lastName) {
                setErrors(prev => ({
                  ...prev,
                  lastName: '',
                }));
              }
            }}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
          />

          <Input
            ref={emailRef}
            label="Email"
            placeholder="Enter email"
            value={email}
            error={errors.email}
            onChangeText={text => {
              setEmail(text);

              if (errors.email) {
                setErrors(prev => ({
                  ...prev,
                  email: '',
                }));
              }
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />

          <Input
            ref={passwordRef}
            label="Password"
            placeholder="Create password"
            value={password}
            error={errors.password}
            onChangeText={text => {
              setPassword(text);

              if (errors.password) {
                setErrors(prev => ({
                  ...prev,
                  password: '',
                }));
              }
            }}
            secureTextEntry
            secureToggle
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
          />

          <Input
            ref={confirmPasswordRef}
            label="Confirm Password"
            placeholder="Confirm password"
            value={confirmPassword}
            error={errors.confirmPassword}
            onChangeText={text => {
              setConfirmPassword(text);

              if (errors.confirmPassword) {
                setErrors(prev => ({
                  ...prev,
                  confirmPassword: '',
                }));
              }
            }}
            secureTextEntry
            secureToggle
            returnKeyType="done"
          />

          <Button
            title="Create Account"
            loading={loading}
            onPress={handleRegister}
          />
        </View>

        <View style={styles.footer}>
          <Text color={Colors.textSecondary}>Already have an account?</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Login')}
          >
            <Text weight="semibold" color={Colors.primary}>
              {' '}
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Register;
