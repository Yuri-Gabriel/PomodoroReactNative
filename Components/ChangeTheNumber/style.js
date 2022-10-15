/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { StyleSheet } from 'react-native';

const Estilos = StyleSheet.create({
    ChangeTheNumberMainContainer: {
        width: 180,
        height: 180,
    },
    Tittle: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 10
    },
    ChangeTheNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    ButtonOfChange: {
        width: 35,
        height: 35,
        backgroundColor: '#2B2B2B',
        borderColor: "#000000",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 50,
        marginBottom: 5
    },
    NumberTextContainer: {
        backgroundColor: '#2B2B2B',
        borderColor: "#000000",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        width: 100,
        height: 105,
    },
    NumberText: {
        color: '#FFFFFF',
        fontSize: 70,
        textAlign: 'center',
    },
});

export default Estilos;
