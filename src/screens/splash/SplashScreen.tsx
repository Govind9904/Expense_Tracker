import React, { useEffect, useRef } from 'react';
import {
  View,
  ActivityIndicator,
  Animated,
  SafeAreaView,
} from 'react-native';

import SplashLogo from './components/SplashLogo';
import styles from './Splash.stayle';
import { initializeApp } from '../../utils/splash';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation<any>();

    useEffect(() => {
        Animated.sequence([
            Animated.parallel([
            Animated.timing(logoOpacity, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }),

            Animated.spring(logoScale, {
                toValue: 1,
                friction: 5,
                tension: 80,
                useNativeDriver: true,
            }),
            ]),

            Animated.timing(textOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            }),
        ]).start(async () => {
            const isAuthenticated = await initializeApp();

            setTimeout(() => {
            if (isAuthenticated) {
                navigation.replace('AppNavigator');
            } else {
                navigation.replace('AuthNavigator');
            }
            }, 500);
        });
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SplashLogo
          logoOpacity={logoOpacity}
          logoScale={logoScale}
          textOpacity={textOpacity}
        />
      </View>

      <View style={styles.footer}>
        <ActivityIndicator
          color="#FFFFFF"
          size="large"
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;