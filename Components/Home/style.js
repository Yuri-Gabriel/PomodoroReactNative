/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { StyleSheet, Dimensions } from 'react-native';

const SizeScreen = Dimensions.get("window");

const Estilos = StyleSheet.create({
    Container: {
        backgroundColor: '#424242',
        height: SizeScreen.height,
        alignItems: 'center',
    },
    Header: {
        width: SizeScreen.width,
        height: 70,
        paddingTop: 10,
        backgroundColor: '#2B2B2B',
    },
    Title: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },
    ChangeTheNumbersContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: SizeScreen.height - 70,
    },
    NavigationButton: {
        backgroundColor: '#2B2B2B',
        borderColor: "#000000",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        width: 100,
        height: 50,
        paddingTop: 10
    },
    NavigationButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "Arial"
    }
});

export default Estilos;