import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from '../../common/Text';

import styles from './DashboardHeader.styles';

import Colors from '../../../theme/colors';
import { getGreeting } from '../../../utils/greetings';

interface DashboardHeaderProps {
  user: {
    first_name: string;
    last_name?: string;
    profileImage?: string | null;
  };

  onNotificationPress?: () => void;
  onProfilePress?: () => void;
}

const DashboardHeader = ({
  user,
  onNotificationPress,
  onProfilePress,
}: DashboardHeaderProps) => {
  const initials = `${user.first_name.charAt(0)}${
    user.last_name?.charAt(0) ?? ''
  }`.toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity activeOpacity={0.8} onPress={onProfilePress}>
          {user.profileImage ? (
            <Image
              source={{
                uri: user.profileImage,
              }}
              style={styles.avatar}
            />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text weight="bold" color={Colors.white}>
                {initials}
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.userInfo}>
          <Text size="sm" color={Colors.textSecondary}>
            {getGreeting()} 👋
          </Text>

          <Text size="xl" weight="bold">
            {user.first_name}
          </Text>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={onNotificationPress}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={Colors.textPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardHeader;
