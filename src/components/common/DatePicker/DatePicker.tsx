import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import Text from '../Text';

import styles from './DatePicker.styles';

interface DatePickerProps {
  label?: string;

  placeholder?: string;

  value?: Date | null;

  onChange: (date: Date) => void;

  error?: string;

  disabled?: boolean;

  minimumDate?: Date;

  maximumDate?: Date;
}

const DatePicker = ({
  label,
  placeholder = 'Select Date',
  value,
  onChange,
  error,
  disabled = false,
  minimumDate,
  maximumDate,
}: DatePickerProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);

    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  const formattedDate = value ? value.toLocaleDateString() : placeholder;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Pressable
        disabled={disabled}
        onPress={() => setShowPicker(true)}
        style={[
          styles.input,
          error && styles.errorBorder,
          disabled && styles.disabled,
        ]}
      >
        <Text style={[styles.text, !value && styles.placeholder]}>
          {formattedDate}
        </Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          onChange={handleChange}
        />
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default DatePicker;
