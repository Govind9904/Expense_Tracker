import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { logoutUser } from '../../services/authService';
import { logout } from '../../redux/slices/authSlice';
import { useAppDispatch } from '../../hooks/redux';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },

      {
        text: 'Logout',
        style: 'destructive',

        onPress: async () => {
          await logoutUser();

          dispatch(logout());
        },
      },
    ]);
  };
  return (
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity
  onPress={handleLogout}
>
  <Text>
    Logout
  </Text>
</TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
