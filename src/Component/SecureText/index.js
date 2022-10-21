import React, { useState } from 'react';
import styles from './style';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';

const SecureText = ({ placeholder, getText, Text='' }) => {
    const [secure, setSecure] = useState(true);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textStyle}
                placeholder={placeholder}
                onChangeText={getText}
                value={Text}
                secureTextEntry={secure} />
            <TouchableOpacity style={styles.IconStyle} onPress={()=>setSecure(!secure)}>
                <Image source={{ uri: secure ? 'secure' : 'unsecure' }} style={styles.Icon} />
            </TouchableOpacity>
        </View>
    );
}

export default SecureText;

// Custom SecureText Component