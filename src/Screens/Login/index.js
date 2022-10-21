import React, { useState } from 'react';
import { Validation } from '../../Utils'
import styles from './style';
import { View, Text } from 'react-native';
import { InputField, SecureText, Button } from '../../Component';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => { // login check
        if(!Validation.validateEmail(email)){ // Handled validations
            alert(`Email is not Valid!`)
            return;
        }else if(!Validation.validatePassword(password)){
            alert('Password is not Valid!\nPassword atleast of 8 character with contain a Capital Letter & a number')
            return;
        }else{
            navigation.navigate('Home') // on success login redirect to Home Screen
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.childContainer}>
                <Text style={styles.Header}>Login</Text>
                <InputField // Custom InputField Components
                    placeholder={'Email'}
                    getText={setEmail}
                    Text={email}
                />
                <SecureText // Custom SecureText Components
                    placeholder={'Password'}
                    getText={setPassword}
                    Text={password}
                />
                <Button title={'Login'} onClick={onLogin} />
            </View>
        </View>
    );
}

export default Login;
