import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

import styles from "./ScreenContainer.styles";

interface ScreenContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  keyboardAvoiding?: boolean;
}

const ScreenContainer = ({
  children,
  scrollable = true,
  keyboardAvoiding = true,
}: ScreenContainerProps) => {
  const content = scrollable ? (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}>
      {children}
    </ScrollView>
  ) : (
    <View style={styles.content}>{children}</View>
  );

  if (keyboardAvoiding) {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          {content}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return <SafeAreaView style={styles.container}>{content}</SafeAreaView>;
};

export default ScreenContainer;