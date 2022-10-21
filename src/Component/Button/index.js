import React from 'react';
import styles from './style';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onClick }) => {
    return (
        <TouchableOpacity style={styles.IconStyle} onPress={onClick}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

// Custon Dropdown component
