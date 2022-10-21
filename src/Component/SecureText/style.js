import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth:2,
        borderRadius:6
    },
    textStyle: {
        flex:9,
        height: 40,
        width: '100%',
        marginHorizontal: 10
    },
    IconStyle: {
        flex:1,
        alignSelf:'center',
    },
    Icon: {
        height: 20,
        width: 20
    }
});

export default styles;
