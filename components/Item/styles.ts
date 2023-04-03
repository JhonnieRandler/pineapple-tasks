import { StyleSheet } from "react-native";

export const dynamicBackground = {
    odd: {
        backgroundColor: 'rgba(232, 204, 255, 0.8)',
    },
    even: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        borderRadius: 10,
        height: 40,
        padding: 5,
        gap: 10
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 20,
        color: '#5600A0',
        flex: 1
    },
    content: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 18,
        color: '#5600A0'
    }
  });

export default styles;