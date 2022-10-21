import React from 'react';
import styles from './style';
import { View, TextInput } from 'react-native';

const InputField = ({ placeholder, getText, Text='' }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textStyle}
                placeholder={placeholder}
                value={Text}
                onChangeText={getText} />
        </View>
    );
}

export default InputField;

// Custon InputField component
