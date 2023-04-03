import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(221, 182, 255, 0.7);',
      width: '100%',
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 15,
      paddingRight: 15
    },

    right: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    },

    text: {
      fontSize: 20,
      fontFamily: 'Cairo',
      fontWeight: '700',
      color: '#5600A0'
    },

    options: {
      backgroundColor: '#DDB6FF',
      position: 'absolute',
      zIndex: 999,
      right: 0,
      top: 24,
      padding: 20,
      borderRadius: 15,
      gap: 10,
      alignItems: "flex-end",
    },

    optionName: {
      fontFamily: 'Roboto',
      fontWeight: '500',
      fontSize: 16,
      color: '#5600A0'
    }
  });

export default styles;