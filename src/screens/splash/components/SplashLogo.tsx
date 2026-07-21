import React from 'react';
import { Animated } from 'react-native';

import styles from '../Splash.stayle';
import { APP } from '../../../constants/app';

interface Props {
  logoOpacity: Animated.Value;
  logoScale: Animated.Value;
  textOpacity: Animated.Value;
}

const SplashLogo = ({ logoOpacity, logoScale, textOpacity }: Props) => {
  return (
    <>
      {/* <Animated.Image
        source={require('../../../assets/images/logo.png')}
        resizeMode="contain"
        style={[
          styles.logo,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      /> */}

      <Animated.Text style={styles.title}>{APP.NAME}</Animated.Text>

      <Animated.Text style={styles.subtitle}>{APP.TAGLINE}</Animated.Text>
    </>
  );
};

export default SplashLogo;
