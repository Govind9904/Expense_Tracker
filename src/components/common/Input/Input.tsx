import React, {
  forwardRef,
  useMemo,
  useState,
} from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import Text from '../Text';
import styles from "./Input.styles";

export interface InputProps extends TextInputProps {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureToggle?: boolean;
}

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      secureTextEntry,
      secureToggle = false,
      editable = true,
      style,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const [hidden, setHidden] = useState(secureTextEntry);

    const containerStyle = useMemo(
      () => [
        styles.inputContainer,
        focused && styles.focused,
        !!error && styles.errorBorder,
        !editable && styles.disabled,
      ],
      [focused, error, editable],
    );

    return (
      <View style={styles.wrapper}>
        {label ? (
          <Text weight="semibold" style={styles.label}>
            {label}
          </Text>
        ) : null}

        <View style={containerStyle}>
          {leftIcon}

          <TextInput
            ref={ref}
            style={[styles.input, style]}
            placeholderTextColor="#94A3B8"
            editable={editable}
            secureTextEntry={hidden}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />

          {secureToggle ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setHidden(!hidden)}
            >
              <Text style={styles.toggle}>
                {hidden ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          ) : (
            rightIcon
          )}
        </View>

        {error ? (
          <Text
            color="danger"
            size="sm"
            style={styles.errorText}
          >
            {error}
          </Text>
        ) : helperText ? (
          <Text
            color="secondary"
            size="sm"
            style={styles.helperText}
          >
            {helperText}
          </Text>
        ) : null}
      </View>
    );
  },
);

export default Input;