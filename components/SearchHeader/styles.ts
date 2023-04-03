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
      paddingRight: 15,
      gap: 10
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
      fontWeight: '400',
      color: '#5600A0',
      flex: 1,
      height: 40
    }
  });

export default styles;