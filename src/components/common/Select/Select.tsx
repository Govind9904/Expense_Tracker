import React from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import Text from '../Text';

import styles from './Select.styles';

export interface SelectItem {
  label: string;
  value: string | number;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  data: SelectItem[];
  value: string | number | null;
  onChange: (item: SelectItem) => void;
  error?: string;
  disabled?: boolean;
}

const Select = ({
  label,
  placeholder = 'Select',
  data,
  value,
  onChange,
  error,
  disabled = false,
}: SelectProps) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <Dropdown
        style={[styles.dropdown, error ? styles.errorBorder : null]}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        itemTextStyle={styles.itemText}
        activeColor="transparent"
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        disable={disabled}
        onChange={onChange}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default Select;
