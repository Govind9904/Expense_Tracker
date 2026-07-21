import React, { useEffect, useRef } from 'react';
import { View, ActivityIndicator, Animated, SafeAreaView } from 'react-native';
import SplashLogo from './components/SplashLogo';
import styles from './Splash.stayle';
import { initializeApp } from '../../utils/splash';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const isMounted = useRef(true); // Track mount state

  const navigation = useNavigation<any>();

  useEffect(() => {
    isMounted.current = true;

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

      // Only execute navigation if user hasn't backed out of the app
      if (isMounted.current) {
        setTimeout(() => {
          if (!isMounted.current) return;
          
          navigation.reset({
            index: 0,
            routes: [{ name: isAuthenticated ? 'AppNavigator' : 'AuthNavigator' }],
          });
        }, 500);
      }
    });

    return () => {
      isMounted.current = false; // Cleanup to prevent memory leaks
    };
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
        <ActivityIndicator color="#FFFFFF" size="large" />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
