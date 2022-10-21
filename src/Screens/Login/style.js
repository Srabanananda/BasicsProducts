import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    childContainer: {
        height: '20%',
        justifyContent: 'space-between'
    },
    Header:{
        fontSize:25,
        fontWeight:'bold',
        color:'#000000',
        textAlign:'center'
    }
});

export default styles;