import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 50,
        height: 50,
    },
    day: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 16,
        color: '#ccc',
        marginLeft:5,
    },
    temperature: {
        fontSize: 22,
        fontWeight: 'bold',
        width: 58,
        textAlign: 'right',
    },
});