import React from 'react';
import styles from './style';
import { View, TextInput } from 'react-native';

const NumericInput = ({ placeholder, getText, Text='' }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textStyle}
                placeholder={placeholder}
                value={Text}
                keyboardType={'numeric'}
                onChangeText={getText} />
        </View>
    );
}

export default NumericInput;

// Custom NumericInput component
