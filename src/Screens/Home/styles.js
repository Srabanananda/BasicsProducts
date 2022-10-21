import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonContainer: {
      marginVertical: 5
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    inputParent: {
      marginVertical: 5
    },
    renderParent: {
      height: 100,
      borderColor: '#121212',
      borderWidth: 1,
      padding: 10,
      borderRadius: 10
    },
    renderItemParent: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
    },
    renderItemTitle: {
      flex: 1,
      fontWeight: 'bold'
    },
    renderItemValue: {
      flex: 1,
    }
  });
  
  export default styles;
